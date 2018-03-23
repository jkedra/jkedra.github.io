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
foolling it into thinking it is getting the password in interactive way.

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
ssh to avoid adding a volatile key to the `ssh_keys`, replacing its
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

## Multihops

Multihops allows to manage limitations of the network. Usually it happens
because the only points connecting the external world with our network
are HTTP proxy or bastion hosts, so direct SSH connection to a host outside
the internal network is not possible.

However SSH tools are smart enough to overcome restrictions mentioned.
Keep reading.


### Scenario 1: HTTP proxy + bastion host

    +---------+    +------------+    +---------+   +--------+
    | laptop  |--->| HTTP proxy |--->| bastion |-->| target |
    +---------+    | NTLM auth  |    |  host   |   |  host  |
                   +------------+    +---------+   +--------+

#### Dealing with HTTP proxy first

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

Without a pseudo-TTY allocated (`-t` option) you will not be able to enter an
interactive ssh session. The pseudo-TTY is not required for a single-run, no
keyboard input command (like `ssh bastion ls`) but is a prerequisite for
interactive ssh.

Because the second ssh runs at the bastion, the private key file `KEY.pem`,
required to access target EC2, needs to be copied to the bastion before.

#### Sophisticated Way

The _Easy Approach_ is enough for ad-hoc connections but also tiresome for
daily operations. For a regular access through multi-hops I would ideally
have a simple version of ssh with an alias host.

##### ProxyCommand Magic

You have seen the `ProxyCommand` already with the `corkscrew` command. 
From the documentation:
_Specifies the command to use to connect to the server. [...]
The command can be basically anything, and should read from its standard
input and write to its standard output.  It should eventually connect an
sshd server running on some machine. [...]
any occurrence of ‘%h’ will be substituted by the host name to connect,
‘%p’ by the port, and ‘%r’ by remote user name_

Lets analyze an example:

    (1)                   (2)
    ssh  -o 'ProxyCommand ssh -xaq hophost nc %h 22' ec2-user@target

The ssh (1) uses another, inner ssh (2) to connect to `hophost` host first
(`ssh -xaq hophost`). The inner ssh (2) runs `nc target 22` which connects
to the `target:22` and now all standard input/output are now redirected to
port 22 of the `target`. And it does the trick.
The outer ssh (1) performs the SSH protocol over the standard input/output 
instead of TCP/IP (effectively ignoring the `target`, using the username only)
and proceeds with the authentication.
Lets prove it and run it without a hostname, providing the `target` directly
to `nc` instead:

    ssh -o 'ProxyCommand ssh -xaq hophost nc target 22' ec2-user@

You will find it working. What is worthy of note - the authentication key
does not need nor can be located at the `hophost` host.
It is the netcat (nc) which opens the connection and it is the outer ssh (1)
which does the authentication. The outer ssh runs at its own node, not at the
`hosthost` one.

Instead of using the netcat, the latest versions of ssh have its own solution
of forwarding the standard i/o to given port. It is `-W host:port` flag.
So here is a counterpart of the netcat version:

    ssh -o 'ProxyCommand ssh -W %h:22 hophost' ec2-user@target

Looks simpler. In a similar way the authentication throuth an NTLM proxy works.
You have the `corkscrew` option for that purpose.

Now how to set it up in a nice way? With the first scenario you have already put
a magic proxy in the user `~/.ssh/config` file. Whenever you ssh to bastion,
it runs the proxy corkscrew, authenticates through your HTTP NTLM proxy and
setup SSH connection over it. It just matches the hostname (after the `Host`
directive you may use multiple names or even matching patterns).
I specified the `ProxyCommand` above with the `-o` flag. But the more
appropriate place to specify it is the `~/.ssh/config` file.

Because you are free to setup another `~/.ssh/config` at the bastion host,
and the next one, and another... this way you may involve multiple proxies
to work your way to the target node automatically. So instead of
specifing a chain of ssh, you can ssh1 directly to aws target node, ssh1
based on its config will run a proxy ssh2 which connects to bastion first.
The ssh2 to bastion will be handled by another rule which uses its own
proxy (`corkscrew` or `nc`) to skip over HTTP proxy and get connected to
bastion. The ssh1 will work over this connection to the target host.

#### Complete solution

Contents of `~/config/.ssh`:

    Host bastion
       HostName 52.54.127.96
       HostKeyAlias bastion
       User mybastionuser
       ProxyCommand corkscrew proxy.kedra.com 80 %h %p ~/.ssh/proxyauth
       UserKnownHostsFile=/dev/null
       StrictHostKeyChecking=no
       AddKeysToAgent=yes
       ServerAliveInterval 60

    Host awstarget
       HostName 10.10.35.17
       HostKeyAlias awstarget
       User ec2-user
       ProxyCommand ssh -W %h:%p bastion
       UserKnownHostsFile=/dev/null
       StrictHostKeyChecking=no
       AddKeysToAgent=yes

So when I do `ssh bastion` it automatically connects to it using `corkscrew` over
HTTP proxy. And when I connect to `awstarget`

Final test:

    jurek@ub16a|2106(master)$ ssh -i myAWSkey.pem awstarget
    Warning: Permanently added 'bastion' (ECDSA) to the list of known hosts.
    Last failed login: Thu Mar 22 12:29:05 EDT 2018 from ip-10-110-50-197.ec2.internal on ssh:notty
    There were 2 failed login attempts since the last successful login.
    Last login: Thu Mar 22 12:25:02 2018 from ip-10-110-50-197.ec2.internal
    [ec2-user@ip-10-10-35-17 ~]$


### Scenario 2: Connect a Database available from 2nd host

Real life scenario: Multi-tier networks with a few connecting points.  I have
[Oracle RAC](we:) database which I want connect to, but since I cannot connect
to it directly, I have to SSH from my home node (`home`) to a jump host first
(`jump`), then from the `jump` to an application host (`app`) and only then I
can reach the database which runs at its database server (`oradb`).

                                              +-------------+------+
    +-------+    +---------+    +---------+   |       SCAN1 | VIP1 |
    | home  |--->|   jump  |--->|  app    |-->| oradb SCAN2 +------+
    |       |    | :22 ssh |    | :22 ssh |   | :1521 SCAN3 | VIP2 |
    +-------+    +---------+    +---------+   +------------ +------+
                                              

#### Oracle Oddities

We have two nodes between us and the database we are interested in.  So it
already look complicated. But it is even more complex because of the RAC's
configuration which is a nightmare.  First the RAC usually exposes
[SCAN](g:Oracle SCAN) [round-robin DNS](we:) address. SCAN makes the hacker's
life complicated. SCAN is a kind of dispatcher which takes the incoming
traffic and redirects it further to another Virtual IP ([VIP](we:Virtual IP).
And there can be a few of them depending on the cluster size. What a headache!
How overcome it?

My solution? Skip the SCAN completly. Use the VIP only. Connect
to VIP directly. Test it first. Forward a single VIP, skip the SCAN.

How to find the VIP and the proper VIP? Yes, not all of them might work.
Getting the VIP is tricky and boring - it is SCAN role to give you a proper
VIP. But in real life of a developer once you pick a proper one it rarely
changes. Ask your DBA to help you. Ask him to be smart because some VIP are not
appropriate for singleton services. If you can - use uniform services instead
(which usually are exposed on all VIPs).

#### Facing the challenge

Port 9999 used in the example here is just an example, you may use another not
occupied TCP port or even [randomly][rand] picking one. The command below runs
at `home` and opens port 9999 at localhost interface as the tunel entry, then
it connects to `jump` host and attaches the other end of the tunel to jump's
localhost interface, port 9999.

It makes no sense until something listens on port 9999 of localhost interface
at `jump` host. Nothing does so far. This is why - once again - another ssh
runs at the `jump` host, attaches a new, second tunel entry to port 9999 of
localhost (effectively connecting both tunels together), then the second ssh
connects the `app` host and redirects the end of the second tunel out of the
`app` reaching directly to port 1521 of the remote host `oradb`'s VIP. An
oracle server is expecting to listen there.

The chain of tunels described above is represented by the following command:

    ssh -tL 9999:localhost:9999 jump ssh -L 9999:oradb-vip1:1521 app

Now connecting to the target database is a simple as issuing:

    sqlplus scott/tiger@//localhost:9999/service_name

Voila! It will work.

#### Links

1. [SSH throush multiple hosts using ProxyCommand][multi1]
2. [Transparent MultiHop][multi2]
3. [ProxyCommand use for multiple hops][multi3]
4. [ProxyCommand passing through one host][multi4]
5. [SSH Agent Forwarding][multi5]
6. [scp files via intermediate host][scp1]
7. [Generating random numbers in bash][rand]

[multi1]: https://serverfault.com/questions/368266/ssh-through-multiple-hosts-using-proxycommand
[multi2]: http://sshmenu.sourceforge.net/articles/transparent-mulithop.html
[multi3]: https://unix.stackexchange.com/questions/317491/proxycommand-use-for-multiple-hops-and-prompt-authentication
[multi4]: https://www.cyberciti.biz/faq/linux-unix-ssh-proxycommand-passing-through-one-host-gateway-server/
[multi5]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[scp1]: https://superuser.com/questions/276533/scp-files-via-intermediate-host/
[rand]: https://blog.eduonix.com/shell-scripting/generating-random-numbers-in-linux-shell-scripting/

#### Other Links

1. [OpenSSH Wiki][openssh-wiki], particularly
   [a chapter on Proxies and Jump Hosts][proxies_jumphosts].
2. [Why OpenSSH deprecated DSA keys][sshdsadepr].

[openssh-wiki]: https://en.wikibooks.org/wiki/OpenSSH
[proxies_jumphosts]: https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Proxies_and_Jump_Hosts
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


