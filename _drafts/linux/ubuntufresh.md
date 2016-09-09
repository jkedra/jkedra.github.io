---
layout: post
title:  "Ubuntu@T530"
author: jkedra
language: en
tags: linux
---

Well, I had already a dedicated Ubuntu machine. But it was second/third hand
ancient Intel CoreDuo with 4GB RAM (Norwegian kb). Couldn't be compared
with the latest i5 machines I use, with Windows 7-10, plenty of RAM
and SSD. Not fair comparision. So got T530 i5 16G RAM, SSD and installed
Ubuntu 16.04 there. What a nice experience! Instant boot, great resposivenes,
nice screen resolution, cool radiator, better keyboard, out-of-the-box
working hardware keys, system suspend. Really nice.

## Base Install
Base install is seamless. Boot from pendrive
(press <kbd>F12</kbd> to choose it boot device) is as simple
as the rest of process. Only partitioning related decision may be not
such trivial as the rest of process.

Here are subject which may need more attention:

## Post Install

## Packages Installed Later

## Problems

### WiFi After Suspend

WiFi was ready to register at start. It is worth of signing into
local network because it allows to pick the latest packages from
remote Ubuntu repository. It saves time and resources by avoiding
installation an outdated Ubuntu and a need to update it aferwards.

I am not sure why it happens and how to recover from it. 
For know I just extracted a couple of useful commands from
[Ubuntu Bugs] site:

1. `wpa_cli`
2. `systemctl restart network-manager.service`

Also there might be a workaround at [StackExchange], but I have not
tested it yet.


[Ubuntu Bugs]: https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/1589401
[StackExchange]: http://askubuntu.com/questions/761180/wifi-doesnt-work-after-suspend-after-16-04-upgrade/761220#761220
