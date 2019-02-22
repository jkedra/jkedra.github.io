---
layout: post
title: "OpenConnect"
author: jkedra
language: en
tags: linux
---
VPN, all black magic for me. I heard the work, I use it at work but
never was able to setup more advanced VPN. Now it is everywhere,
Nortel VPN, Cisco AnyConnect, Android build-in and Linux. I found
Linux's OpenConnect to be compatible with Cisco AnyConnect.
Setting it up to work was a pain but finally it started to work,
here are my notes, hopefully useful for others saving wasting time.

## Cisco AnyConnect
Commercial product, can be downloaded from the Cisco We


{% highlight bash %}
{% raw %}
apt install network-manager-openconnect
openconnect --user=891757 --no-cert-check --csd-wrapper=./sfinst era.acme.com/acmegrp

less ~/.cisco/hostscan/log/cstub.log 
~/.cisco/hostscan/log/cstub.log
{% endraw %}
{% endhighlight %}



Final connect string:

{% highlight bash %}
{% raw %}
#!/bin/bash
openconnect --user 891757 --authgroup acmegrp \
        --os=linux \
        --csd-wrapper ~jxa/sfinst3 \
        --csd-user jxa \
        --no-cert-check \
        -c ~jxa/vpn/xx-priv.pfx -p keypassword \
        era.acme.com/acmegrp
{% endraw %}
{% endhighlight %}


Using AnyConnect for Linux directly:

{% highlight bash %}
{% raw %}
/opt/cisco/anyconnect/bin/vpn connect era.acme.com/acmegrp

VPN> connect era.acme.com/acmgrp
connect era.acme.com/acmegrp
  >> contacting host (era.acme.com/acmegrp) for login information...
  >> notice: Contacting era.acme.com/acmegrp.
  >> warning: No valid certificates available for authentication.
  >> error: Certificate Validation Failure

  >> Certificate Validation Failure
  >> state: Disconnected

{% endraw %}
{% endhighlight %}

### Links
1. [Eugene Rants]
2. [Cisco VPN download][cisco downl]
2. [Download Version 4.3][4.3d]

[Eugene Rants]: http://blog.yunak.eu/2013/07/19/openconnect/
[4.3d]: http://dkist.nso.edu/node/1115
[cisco downl]: https://software.cisco.com/download/release.html?mdfid=286281283&flowid=72322&softwareid=282364313&release=4.3.02039&relind=AVAILABLE&rellifecycle=&reltype=latest



