---
layout: post
title:  Moving BTRFS
author: jkedra
language: en
tags: linux fs
jquery: true
jss: [wikipize]
comments: true
---

# Scenario

In [my first BTRFS post][btrfs1] I described most of its basic features
and focused on creating and maintaning snapshots. Now I want to perform
some administrative tasks - replace one SSD drive by a larger one.

## Configuration

My laptop has a hard disk drive of 320GB and another SSD one which
is only 120GB in size. Benefits of SSD are so huge that actually work
only with this one. The spinning disk is currently used only to store
archive data and things I couldn't affort keeping on SSD.

SSD (sdb) and hard disk (sda) layouts are as below:

| name | size | description                 |
| ---- | ---: | ------------------------    |
| sdb1 | 4G   | `/boot`, bootable partition |
| sdb2 | 99G  | `/` + `/home`               |
| sdb3 | 8G   | swap                        |
| sda1 | 8G   | `/boot` copy from sdb1      |
| sda4 | 130G | new copy from sdb2          |

Now let's inspect subvolume configuration.

    btrfs subvolums list /
    ID 257 gen 292008 top level 5 path @
    ID 258 gen 292004 top level 5 path @home
    ID 274 gen 291494 top level 258 path @home/jxa/.virtualbox
    ID 275 gen 291511 top level 258 path @home/jxa/Downloads
    ID 276 gen 291511 top level 258 path @home/jxa/tmp
    ID 277 gen 291184 top level 258 path @home/jxa/VirtualBox VMs
    ID 312 gen 292007 top level 257 path var/log
    ID 358 gen 292005 top level 258 path @home/jxa/.cache
    ID 359 gen 291559 top level 258 path @home/jxa/Arch
    ID 437 gen 291998 top level 258 path @home/.snapshots
    ID 929 gen 291370 top level 437 path @home/.snapshots/279/snapshot
    ID 1761 gen 291551 top level 257 path .snapshot
    [...]

There are also multiple snapshots as created by snapper and
some coming from docker.

## Safety Backup

Start with read-only snapshots for stable image creation:

    btrfs subvolume snapshot -r / /root_ro 
    btrfs subvolume snapshot -r /home /home/home_ro

Now lets create a safety backup of these volumes.

    # btrfs send /root_ro | pv -terba | gzip > /media/jxa/backup/t530-btrfs-root.gz
    # btrfs send /home/home_ro | pv -terba | gzip > /media/jxa/backup/t530-btrfs-home.gz


## Restore to a New Disk

I am going to clone my system to the hard disk, the target partition
will be `/dev/sda4`. I start with creating btrfs filesystem and
mounting do `/mnt/backup`:

    # mkfs.btrfs -d single -L btrfs2 -f /dev/sda4
    # mount /dev/sda4 /mnt/backup
    # mount | grep btrfs
    /dev/sdb2 on / type btrfs (rw,realtime,space_cache,subvolid=257,subvol=/@)
    /dev/sdb2 on /home type btrfs (rw,realtime,space_cache,subvolid=258,subvol=/@home)
    /dev/sdb2 on /var/lib/docker/plugins type btrfs
                 (rw,realtime,space_cache,subvolid=257,subvol=/@/var/lib/docker/plugins)
    /dev/sda4 on /mnt/backup type btrfs (rw,realtime,space_cache,subvolid=5,subvol=/)

Docker mountpoint disappears once docker service is stopped.
It does not seem to be any docker subvolume present once I have deleted
all docker images.

Now lets clone root and home subvolumes to target disk:

    # btrfs send /home/home_ro | pv -terba | btrfs receive /mnt/backup
    At subvol /home/home_ro
    At subvol home_ro
    26,3GiB 0:12:16 [36,6MiB/s] [36,6MiB/s] 
    # btrfs send /root_ro | pv -terba | btrfs receive /mnt/backup
    At subvol /root_ro
    At subvol root_ro
    12,4GiB 0:07:30 [28,2MiB/s] [28,2MiB/s]

`pv` is a tool to progress monitoring while copying data through a pipe.
Now rename newly created subvolumes to more convenient names.
It can be done simply through usual `mv` command:

    # cd /mnt/backup
    # mv home_ro @home
    # mv root_ro @

Subvolumes above were created as read-only snapshots. They
are readonly indeed, check it yourself and convert to
readwrite subvolumes:

    # btrfs property get -ts /mnt/backup/@
    ro=true
    # btrfs property get -ts /mnt/backup/@home
    ro=true
    # btrfs property set -ts /mnt/backup/@ ro false
    # btrfs property set -ts /mnt/backup/@home ro false


We also need to copy boot from sdb1 to sda1. I just created
a new ext2 filesystem at sda1, and created a copy of `/boot`
currently mounted from sdb1 to sdb1 using tar (or `cp -p`).

## Preparing the New System

Good reading on [GRUB](we:).

    # cd /mnt
    # umount /mnt/backup
    # mkdir root
    # mount -t btrfs -o subvol=@ /dev/sda4 /mnt/root
    # mount /dev/sda1 /mnt/root/boot
    # for i in dev dev/pts sys proc run; do mount --bind /$i /mnt/root/$i; done
    # chroot /mnt/root

Now edit `/etc/fstab`

    # update-grub
    # grub-install --recheck /dev/sda
    # exit
    # cd /mnt
    # umount -R /mnt/root
    # reboot

GRUB:
https://dug.net.pl/tekst/77/przywracanie_grub2_za_pomoca_chroot/
https://zeldor.biz/2010/12/install-grub-from-chroot/


## Resources

1. [BTRFS wiki.kernel.org][wikikernel] - primary source of information on BTRFS.
2. [How to manage BTRFS Storage Pools, Subvolumes and Snapshots][course1] - RedHat documentation on LVM CLI.
3. [Incremental Backup][incrm]
4. [Subvolumes and Snapshots][lwn-sub1] - an LWN article.
5. [Snappper][snapper] - automatic snapshots.
6. [Tuning Snapper][archlin] - ArchLinux Wiki.
7. [ArchLinux on BTRFS][archbtrfs]
8. [BTRFS in Oracle Enterprise Liinux][oel6]
9. [BTRFS features][ora1], Oracle's summary.
10. [Fixing BTRFS full problems][fixing-full-problems]
11. [Moving BTRFS subvolume to another disk][mov-subv]


[btrfs1]: /2016/09/07/btrfs.html
[course1]: http://www.linux.com/learn/tutorials/767332-howto-manage-btrfs-storage-pools-subvolumes-and-snapshots-on-linux-part-1
[archbtrfs]: https://wiki.archlinux.org/index.php/Btrfs#Copy-On-Write_.28CoW.29

[wikikernel]: https://btrfs.wiki.kernel.org/index.php/Main_Page
[incrm]: https://btrfs.wiki.kernel.org/index.php/Incremental_Backup
[lwn-sub1]: https://lwn.net/Articles/579009/
[snapper]: http://snapper.io/documentation.html
[archlin]: https://wiki.archlinux.org/index.php/Snapper
[ubuntu14kernel]: http://askubuntu.com/questions/690149/when-will-4-2-0-kernel-be-available-for-14-04-lts
[cow1]: https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Copy_on_Write_.28CoW.29
[oel6]: https://docs.oracle.com/cd/E37670_01/E37355/html/ol_btrfs.html
[ora1]: http://www.oracle.com/technetwork/server-storage/linux/technologies/btrfs-overview-1898045.html
[wiki-convert1]: https://btrfs.wiki.kernel.org/index.php/Conversion_from_Ext3
[wiki-balancing]: https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Balancing
[wiki-snapshots]: https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Snapshots
[fixing-full-problems]: http://marc.merlins.org/perso/btrfs/post_2014-05-04_Fixing-Btrfs-Filesystem-Full-Problems.html
[mov-subv]: http://c0rp.kz/moving-root-btrfs-subvolume-to-another-disk/
