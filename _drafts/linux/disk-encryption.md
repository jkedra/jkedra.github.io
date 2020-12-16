---
layout: post
title:  "Linux Disk Encryption"
date:   2015-07-29 11:41:00
author: jkedra
language: en
tags: linux
---

Why encryption? Long time ago already is there an option to encrypt underlying
disks or a filesystem during Ubuntu and/or RedHat. I never was attracted by it,
finding in that option only troubles with recoverying my system after some
future system crashes. It is kensigton lock duty to keep my laptop
physically safe and I consider it enough in usual circumstances. I do not plan
to protect my SSD from being physically removed from kensigton locked laptop. 

However it is a different challenge when there is an external drive connected
to physically secured laptop. Those external USB drives do not have kensigton compatible slots. They are small and not pysically secured, ergo - could be stolen easy. In this very case, ecrypting them really does make sense.

## LUKS: Linux Unified Key Setup


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

1. LUKS: _[Linux Unified Key Setup][luks0]_
1. [Linux Hard Disk Encryption With LUKS][luks1]
2. [Ubuntu Full Disk Encryption HOWTO 2019][ubuntu-fde]
3. [Encrypting disks on Ubuntu 10.04][enc1904]
4. [luksFormat fails with code 22][code-22]
5. dm-crypt: _[Encrypting an entire system][encrypting-all]_
6. [Device Encryption][dev-encr]


[luks0]: https://gitlab.com/cryptsetup/cryptsetup/
[luks1]: https://www.cyberciti.biz/hardware/howto-linux-hard-disk-encryption-with-luks-cryptsetup-command/
[ubuntu-fde]: https://help.ubuntu.com/community/Full_Disk_Encryption_Howto_2019
[enc1904]: https://medium.com/@chrishantha/encrypting-disks-on-ubuntu-19-04-b50bfc65182a
[code-22]: https://www.itfromscratch.com/command-failed-with-code-22-invalid-argument/
[encrypting-all]: https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_an_entire_system
[dev-encr]: https://wiki.archlinux.org/index.php/dm-crypt/Device_encryption
