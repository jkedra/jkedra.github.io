---
layout: post
title:  BTRFS
author: jkedra
date: 2016-04-30 00:00
language: en
tags: linux fs
jquery: true
jss: [wikipize]
---

# BTRFS
BTRFS indeed is a better filesystem, featuring
[extent](we:Extent_%28file_systems%29) based file storage,
[copy-on-write][cow1] (COW), easy snapshots and filesystem compression and
deduplication.
[It does not support](https://wiki.archlinux.org/index.php/Btrfs#Limitations)
encryption, nor swap files on itself.

## Create

    mkfs.btrfs -f -L testbtrfs  /dev/sdd1 /dev/sdd2 /dev/sdd3
    mkfs.btrfs -L home /dev/sdd1

    [root@oel7 ~]# mkfs.btrfs -L home /dev/sdd1
    btrfs-progs v3.19.1
    See http://btrfs.wiki.kernel.org for more information.

    Turning ON incompat feature 'extref': increased hardlink limit per file to 65536
    fs created label home on /dev/sdd1
	nodesize 16384 leafsize 16384 sectorsize 4096 size 30.00GiB

## Subvolumes testing

    [root@oel7 ~]# btrfs subvolume create /home/sub1
    Create subvolume '/home/sub1'
    [root@oel7 ~]# btrfs subvolume create /home/sub2
    Create subvolume '/home/sub2'
    [root@oel7 ~]# btrfs subvolume list /home
    ID 258 gen 14 top level 5 path sub1
    ID 259 gen 15 top level 5 path sub2

## Snapper

### Configuration

    [root@oel7 ~]# ls /home
    jxa  oracle  sub1  sub2
    [root@oel7 ~]# snapper -c home create-config /home
    [root@oel7 ~]# snapper -c home list
    Type   | # | Pre # | Date | User | Cleanup | Description | Userdata
    -------+---+-------+------+------+---------+-------------+---------
    single | 0 |       |      | root |         | current     |         
    [root@oel7 ~]# snapper list
    Unknown config.
    [root@oel7 ~]# snapper -c root create-config /home
    Creating config failed (subvolume already covered).
    [root@oel7 ~]# snapper delete-config home
    Command 'delete-config' does not take arguments.
    [root@oel7 ~]# snapper delete-config 
    Unknown config.
    [root@oel7 ~]# snapper -c home delete-config 
    [root@oel7 ~]# snapper -c root create-config /home
    [root@oel7 ~]# snapper list
    Type   | # | Pre # | Date | User | Cleanup | Description | Userdata
    -------+---+-------+------+------+---------+-------------+---------
    single | 0 |       |      | root |         | current     |         
    [root@oel7 ~]# snapper list-configs
    Config | Subvolume
    -------+----------
    root   | /home    

#### /home config

    snapper set-config ALLOW_USERS="oracle"
    snapper set-config TIMELINE_LIMIT_HOURLY="24"
    snapper set-config TIMELINE_LIMIT_DAILY="14"
    snapper set-config TIMELINE_LIMIT_MONTHLY="6"
    snapper set-config TIMELINE_LIMIT_YEARLY="0"
    snapper get-config
    Key                    | Value 
    -----------------------+-------
    ALLOW_GROUPS           |       
    ALLOW_USERS            | oracle
    BACKGROUND_COMPARISON  | yes   
    EMPTY_PRE_POST_CLEANUP | yes   
    EMPTY_PRE_POST_MIN_AGE | 1800  
    FSTYPE                 | btrfs 
    NUMBER_CLEANUP         | yes   
    NUMBER_LIMIT           | 50    
    NUMBER_MIN_AGE         | 1800  
    SUBVOLUME              | /home 
    TIMELINE_CLEANUP       | yes   
    TIMELINE_CREATE        | yes   
    TIMELINE_LIMIT_DAILY   | 14    
    TIMELINE_LIMIT_HOURLY  | 24    
    TIMELINE_LIMIT_MONTHLY | 6     
    TIMELINE_LIMIT_YEARLY  | 0     
    TIMELINE_MIN_AGE       | 1800  

#### root fs config

	mv log log-old
	btrfs subvolume create /var/log
	chmod 775 log
	chown root:syslog log
	mv log-old/* log
	rmdir log-old

	mv cache cache-old
	btrfs subvolume create /var/cache
	chmod 755 cache
	mv cache-old/* cache
	rmdir cache-old

	mv /tmp /tmp-old
	btrfs subvolume create /tmp
	chmod 1777 /tmp
	mv /tmp-old/* /tmp
	rmdir /tmp-old

	mv /var/tmp /var/tmp-old
	btrfs subvolume create /var/tmp
	chmod 1777 /var/tmp
	mv /var/tmp-old/* /var/tmp
	rmdir /var/tmp-old
	 
	snapper -c root2 create-config /

    root@ubuntu15b:/var# snapper list-configs
    Config | Subvolume
    -------+----------
    root   | /home    
    root2  | /        


    snapper -c root2 set-config ALLOW_USERS="jxa"
    snapper -c root2 set-config TIMELINE_LIMIT_HOURLY="24"
    snapper -c root2 set-config TIMELINE_LIMIT_DAILY="7"
    snapper -c root2 set-config TIMELINE_LIMIT_MONTHLY="0"
    snapper -c root2 set-config TIMELINE_LIMIT_YEARLY="0"
    snapper -c root2 get-config

Suse recommends to create following subvolumes:

    /tmp
    /opt
    /srv
    /var/crash
    /var/spool
    /var/log
    /var/run
    /var/tmp

### Tuning

#### snapper

I like snapper to ignore a list of directories when doing
reports (comparing changes). So I add a filter file
`/etc/snapper/filters/mysnap.txt`
with following lines:

    */.git
    */.cache


#### updatedb
Prevent `updatedb` of indexing `.snapshots` directories.
The configuration to adjust is located in `/etc/updatedb.conf`:

	PRUNENAMES=".git .bzr .hg .svn .cache .snapshots"

#### kernel
Use the latest kernel available. Even with LTS Ubuntu (14.04 at the moment)
[you may use 4.2 kernel][ubuntu14kernel].

### Maintenance
BTRFS occupies more space when snapper is active. Depending on configuration
and on the filesystem activity, it might actually occupy much more than
a regular filesystem does. So the rule of thumb is to plan btrfs size
at least twice what a regular filesystem would take. If possible, plan it more.

Even with such the wide space margin, during often system updates and upgrades
the space pressure might go high and other-than-fs-increase solution is
often required. In such the situation you may sacrifice snapshots history
or remove some of them selectively. The command you are searching for 
is `snapper delete (remove|rm) number | number1-number2`, for example:

snapper -c root2 delete 63-97

This removes some incremental changes so releases sometimes significant
amount of diskspace.

## Resources

1. [BTRFS wiki.kernel.org][wikikernel] - primary source of information on BTRFS.
1. [How to manage BTRFS Storage Pools, Subvolumes and Snapshots][course1] - RedHat documentation on LVM CLI.
2. [Incremental Backup][incrm]
3. [Subvolumes and Snapshots][lwn] - an LWN article.
4. [Snappper][snapper] - automatic snapshots.
5. [Tuning Snapper][archlin] - ArchLinux Wiki.
6. [ArchLinux on BTRFS][archbtrfs]

[course1]: http://www.linux.com/learn/tutorials/767332-howto-manage-btrfs-storage-pools-subvolumes-and-snapshots-on-linux-part-1
[archbtrfs]: https://wiki.archlinux.org/index.php/Btrfs#Copy-On-Write_.28CoW.29

[wikikernel]: https://btrfs.wiki.kernel.org/index.php/Main_Page
[incrm]: https://btrfs.wiki.kernel.org/index.php/Incremental_Backup
[lwn]: https://lwn.net/Articles/579009/
[snapper]: http://snapper.io/documentation.html
[archlin]: https://wiki.archlinux.org/index.php/Snapper
[ubuntu14kernel]: http://askubuntu.com/questions/690149/when-will-4-2-0-kernel-be-available-for-14-04-lts
[cow1]: https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Copy_on_Write_.28CoW.29


