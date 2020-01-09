---
layout: post
title:  "Linux Encryption"
date:   2015-07-29 11:41:00
author: jkedra
language: en
tags: linux
---
LUKS: Linux Unified Key Setup


badblocks -b 4096 -s -w -v /dev/sdf1
apt-get install cryptsetup
cryptsetup -y -v luksFormat /dev/sdf1
cryptsetup -v status backup
pv -tpreb /dev/zero | dd of=/dev/mapper/backup bs=128M
mkfs.ext4 -L BACKUP /dev/mapper/backup

cryptsetup luksDump /dev/sdf1
cryptsetup luksOpen /dev/sdf1 backup
mount /dev/mapper/backup /mnt


## Resources

1. [Linux Hard Disk Encryption With LUKS][luks1]
2. [Ubuntu Full Disk Encryption HOWTO 2019][ubuntu-fde]
3. [Encrypting disks on Ubuntu 10.04][enc1904]


[luks1]: https://www.cyberciti.biz/hardware/howto-linux-hard-disk-encryption-with-luks-cryptsetup-command/
[ubuntu-fde]: https://help.ubuntu.com/community/Full_Disk_Encryption_Howto_2019
[enc1904]: https://medium.com/@chrishantha/encrypting-disks-on-ubuntu-19-04-b50bfc65182a

