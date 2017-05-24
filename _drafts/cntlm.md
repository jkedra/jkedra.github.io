---
layout: post
title:  NTLM proxy for Redhat
author: jkedra
language: en

jquery: true
js: wikipize
---

Modify `/etc/cntlm.conf`:

    Username        "myusername"
    Domain          MYDOMAIN

    Proxy           www-proxy.acme.com:80
    Proxy           serv-proxy.acme.com:80
    NoProxy         localhost, 127.0.0.*, 10.*, 192.168.*
    Listen          3128
    Auth            NTLM


Create passwords and append them to `/etc/cntlm.conf`.
In my case PassNTLMv2 did not work and I had to remove it
from the configuration.

There is a command to create encrypted passwords `cntlm -H`.
But I found it not working good:

    [root@test1 ~]# cntlm -H
    Password: 
    PassLM          1234567890QWERTYUIOPASDRASDFACAS
    PassNT          ADFASSASDFASDF234LKJOV892ALKODFA

    [root@test1 ~]# cntlm -M http://www.onet.pl
    Password: 
    Config profile  1/4... Credentials rejected
    Config profile  2/4... Credentials rejected
    Config profile  3/4... Credentials rejected
    Config profile  4/4... Credentials rejected

    Wrong credentials, invalid URL or proxy doesn't support NTLM nor BASIC.

The other command is just `cntlm -M with some URL`, which when the config
is proper one, spits out with the hashed passwords configuration/profile.
This is exactly what you need to append into your configuration
(instead of what `cntlm -H` creates). Note it also alter the `Auth` parameter:

    [root@test1 ~]# cntlm -M http://www.onet.pl
    Password: 
    Config profile  1/4... Credentials rejected
    Config profile  2/4... OK (HTTP code: 200)
    ----------------------------[ Profile  1 ]------
    Auth            NTLM
    PassNT          A5D7C8ASDFASWER7497D67B159506B4A
    PassLM          E16636FASDFASFABHHBARS22B0014BBC
    ------------------------------------------------

Once the configuration is settled it is high time to test it:

    [root@test1 ~]# /usr/sbin/cntlm -U cntlm -fv
    [...]
    cntlm: Using following NTLM hashes: NTLMv2(0) NT(1) LM(1)
    cntlm[14432]: Cntlm ready, staying in the foreground
    cntlm[14432]: Changing uid:gid to 495:490 - Success


## TODO: Autostart after reboot

    [root@test1 oracle]# rpm -ql cntlm-0.92.3-1
    /etc/cntlm.conf
    /etc/init.d/cntlmd
    /etc/sysconfig/cntlmd
    /sbin/rccntlmd
    /usr/sbin/cntlm
    /usr/share/doc/cntlm-0.92.3
    /usr/share/doc/cntlm-0.92.3/COPYRIGHT
    /usr/share/doc/cntlm-0.92.3/LICENSE
    /usr/share/doc/cntlm-0.92.3/README
    /usr/share/man/man1/cntlm.1.gz
    [root@test1 oracle]# 

## TODO: Configure Squid

