---
layout: post
title:  "SSH Everything"
author: jkedra
language: pl

jquery: true
jss: [wikipize]

tags: ssh
categories: tools
---

## SSH


### ssh-copy-id

For adding SSH keys to remote system use command `ssh-copy-id` which
automates a procedure of adding a key to remote `.ssh/authroized_keys` file.

### sshpass

Regular ssh uses direct TTY access to make sure the password is entered
by an interactive keyboard input. Sshpass runs ssh in a dedicated tty,
folling it into thinking it is getting the password in interactive way.

    sshpass -pMy.Password ssh bastion

### ssh_config and known_hosts

#### OpenSSH deprecated DSA keys

Some time ago [OpenSSH deprecated DSA keys][sshdsadepr].
If you still want to use it, add `PubkeyAcceptedKeyTypes +ssh-dss`
to ssh_config file.

#### OpenSSH hashes known_hosts names

It looks like despite what the manual says, the default now
(OpenSSH 7.2p2) is "yes".  It results in unreadable hosts
names in `known_hosts` file. So usually I expect it to look
like it:

    myserver4,10.209.95.12 ssh-dss AAAAB3NzaC1kc3MAAACBAIgmj+TuTQbfvrhNzYLY+4d4DW+xq
    CYxt+DSEeLl1ipTIfYpBCVMMXQkwyQN6TV2tNfaTAzf2IbChoM48ImL0xxT8C9ziZGt/+8rOqZAI5+C9
    Xok4YQsOmHuJmth3Ah+ttoO/7U1nJLV/ZbJqnZPAmSv3PPzEpXzcZ90+CoWl/+hAAAAFQD96WCuW9vKI
    Q86LAJWo00r7pwqywAAAIAZXWIK2y4rqdmArsJLpmZGay2fW6TyKYUNsvPrpVDqialPu91h4J4fsy92i
    Ap1HSSQqzyM0o2PCk+xpoYmxWAPp0A2RctMO28zlN+UdyaHBUIfzWFP+hUSRvBgaKNho0epVy0ed7mTs
    pmOEKRdjWpW/15CSlmn2CjJDAnOYZCgogAAAIATRx61BTiYpQwXvOT8+GxcKKzkqiJDqc9DMnePadAbk
    q+8RKT9njYQ+pKCqNJUkQ9abY7pQ9XIdZeHBsnL2KqTljva0d3WjGteuCyGNgIPgh+yM2TbvbbzwVCw1
    GbHPbUPT1KFt6Ki0I1vu8z2yaejJADstFdX9IxRtAsdW4bd9g==

But with `HashKnownHosts` default to `yes` I have this instead:

    |1|SuF6AQaEqk97eWxjfsSDuTTEk8E=|Qc/Ln0XgjYn4osmXz2TYkA6SwNA= ssh-rsa AAAAB3NzaC1
    yc2EAAAABIwAAAQEAtlO77eNlUfOO0Vyay0pMLmTaQjKlUhd7Ag78W1CtNHPnd0LIzP2uWdxgNvzgPhm
    QLtjL5ZEFVkjAGgqwgsUOryUkPIbbx2JYC1NaeTewbi3IWKXK6vwvJ+E8I98a61xLvtY/EfPnjL8OHok
    OAh1u7xF9dqJrm6FC9D0nSd2R/IaxW2sMf7SVG0UmKZh/6DMsQFblv2fw/curTgo0xxfrdP6hi8QGyVn
    r1plg1u9SeO6YzKfzBQYjHTUpP0RYJg7FBGZhR7DRns/1Gse/GqIrse/nWiTGG94cQ/eyC++/joCJhRP
    wdvHyml+ucZ3kg/USsIg7BbLs2GUHKC0LiQTo1w==

So now I need to explicitely say I do not need hashing known
hosts:

    HashKnownHosts No

#### HostKeyAlias

The `HostKeyAlias` also applies to known_hosts. When there is no matching DNS
record, I am aliasing hosts using `Host` directive and `HostName` to refer
to real host name or IP address like below:

    Host bastion
       HostName 58.50.127.96
       User jurek
       ProxyCommand corkscrew proxy.kedra.com 80 %h %p ~/.ssh/passwords

With such the configuration the server key gets stored in `known_hosts` as
the entry specified with `HostName` directive, thus it will be
`58.50.127.96`. To make it more meaningful, lets add `HostKeyAlias`
directive and its argument will be now used to save server keys and
searched in `known_hosts` during the connection phase.

    Host bastion
       HostName 58.50.127.96
       HostKeyAlias bastion
       User jurek
       ProxyCommand corkscrew proxy.kedra.com 80 %h %p ~/.ssh/passwords

The `corkcrew` command is actually behind scope of the task but for the note
let me say it allows going through authenticated HTTP NTLM proxy.
There are also other options like using `cntlm` transparent proxy for this
purpose.

#### Removing a particular host from known_hosts

    ssh-keygen -R hostname

Above solution [found here](https://askubuntu.com/questions/20865/is-it-possible-to-remove-a-particular-host-key-from-sshs-known-hosts-file).

#### host key gets changed over and over

In a situation when you are connecting a remote host which gets reinstalled
and its host key gets regenerated, `ssh` drops a warning the remote host
identification gets changed:

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @       WARNING: POSSIBLE DNS SPOOFING DETECTED!          @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    The RSA host key for foo-bar.net has changed,
    and the key for the corresponding IP address 127.0.0.1
    is unchanged. This could either mean that
    DNS SPOOFING is happening or the IP address for the host
    and its host key have changed at the same time.
    Offending key for IP in /home/user/.ssh/known_hosts:6
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!

Sometimes it is actually expected. In such the case I can force
ssh to avoid adding volatile key to the `ssh_keys`, replacing its
location by `/dev/null`: `UserKnownHostsFile=/dev/null`, and
allowing connections to hosts without maching host keys:
`StrictHostKeyChecking=no`.

     Host bastion
       HostName 58.50.127.96
       HostKeyAlias bastion
       User jurek
       ProxyCommand corkscrew proxy.kedra.com 80 %h %p ~/.ssh/passwords
       UserKnownHostsFile=/dev/null
       StrictHostKeyChecking=no

### multihops

#### Sample setup

    +---------+    +------------+    +---------+   +--------+
    | laptop  |--->| HTTP proxy |--->| bastion |-->| target |
    +---------+    | NTLM auth  |    |  host   |   |  host  |
                   +------------+    +---------+   +--------+

#### Dealing with HTTP proxy

Going through the HTTP proxy needs a configuration which
has been already mentioned:

    Host bastion
       HostName 58.50.127.96
       HostKeyAlias bastion
       User jurek
       ProxyCommand corkscrew proxy.kedra.com 80 %h %p ~/.ssh/proxypass
       UserKnownHostsFile=/dev/null
       StrictHostKeyChecking=no
       ServerAliveInterval 60

The `corkscrew` allows going over NTLM authenticated HTTP proxy.
Each time the target is bastion above configuration forces to call
`corkscrew`, authenticate at HTTP proxy and reach bastion host through it.

#### Easy Approach

It is the most straightforward way, do ssh to first host,
then continue connection to another:

    ssh -t bastion ssh -i KEY.pem ec2-user@10.10.21.186

Without pseudo-TTY allocated (`-t` option) you will not be able to have
an interactive session. It is not required for single-shot commands but
is a prerequisite for interactive ssh. Private key file `KEY.pem` which
is required to access target EC2, needs to be copied to bastion first.

Obviously it is not a great idea because it needs
Above works with




ssh -i XXAWS.pem -o 'ProxyCommand ssh -x -a -q bastion nc %h 22' ec2-user@10.10.21.186
ssh -i XXAWS.pem -o 'ProxyCommand ssh -W %h:22 bastion' ec2-user@10.10.21.186

##### Links

1. [SSH throush multiple hosts using ProxyCommand][multi1]
2. [Transparent MultiHop][multi2]
3. [ProxyCommand use for multiple hops][multi3]
4. [ProxyCommand passing through one host][multi4]
5. [SSH Agent Forwarding][multi5]

[multi1]: https://serverfault.com/questions/368266/ssh-through-multiple-hosts-using-proxycommand
[multi2]: http://sshmenu.sourceforge.net/articles/transparent-mulithop.html
[multi3]: https://unix.stackexchange.com/questions/317491/proxycommand-use-for-multiple-hops-and-prompt-authentication
[multi4]: https://www.cyberciti.biz/faq/linux-unix-ssh-proxycommand-passing-through-one-host-gateway-server/
[multi5]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html

### Other Links

1. [OpenSSH Wiki][openssh-wiki]
2. [Why OpenSSH deprecated DSA keys][sshdsadepr].

[openssh-wiki]: https://en.wikibooks.org/wiki/OpenSSH
[sshdsadepr]: http://security.stackexchange.com/questions/112802/why-openssh-deprecated-dsa-keys


## SSH + Python

[Paramiko][paramiko] is Python implementation of SSHv2 protocol for
both client and server. Supports parsing of regular OpenSSH config files,
in particular `ssh_config` and `known_hosts`. It is able to use
[ProxyCommand][paramiko-proxycommand] ssh feature.

[paramiko-proxycommand]: https://stackoverflow.com/questions/17681031/python-ssh-using-tor-proxy
[paramiko]: http://www.paramiko.org/

## VPN

Basic ad-hoc VPN with SSH is easy to acomplish.
Read this [superuser post][sshvpn1] and
documentation about [sshuttle][sshuttle] which is a kind
of framework in Python to forward selected networks to
remote nodes.



[sshvpn1]: http://superuser.com/questions/62303/how-can-i-tunnel-all-of-my-network-traffic-through-ssh
[sshuttle]: https://github.com/apenwarr/sshuttle/


