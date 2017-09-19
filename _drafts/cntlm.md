---
layout: post
title:  CNTLM
author: jkedra
language: en

jquery: true
js: wikipize
---

My employeer uses a web proxy with NTLM authentication. I had my proxy password
stored in multiple locations and with periodical password change I had to go
carefully over the password locations list to change them all. When I skipped
just a one, it locked my account within a few bad password attempts.

Can I have a single point of authentication please? It is exactly what I need
here. CNTLM is the answer.


## CNTLM config

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
But I found it not working well:

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

The other command is just `cntlm -M with some URL`, which prompts for a
password, tests the config on given url, then spits out with the hashed
passwords configuration/profile.  This is exactly what you need to append to
your configuration. Note it also alter the `Auth` parameter:

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


## System Specific

### Ubuntu 16.04

I think it starts automatically in Ubuntu.

### Redhat

There is a package with CNTLM in RHEL 6.4 but without autostart enabled.
It needs to be activated manually.


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

    # /etc/init.d/cntlmd restart
    Shutting down CNTLM Authentication Proxy: [ OK ]
    Starting CNTLM Authentication Proxy: [ OK ]

    # chkconfig cntlmd on

Now setup the environment:

And the following line in /etc/yum.conf file as shown below.

    proxy=http://127.0.0.1:3128

Add in /etc/profile so that it will be enabled on every boot:

    export http_proxy=http://127.0.0.1:3128/
    export https_proxy=http://127.0.0.1:3128/

## TODO: Configure Squid

## Resources

1. [Centos 6.4 behind a proxy](https://www.unixmen.com/update-centos-6-4-behind-a-proxy/)
