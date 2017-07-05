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

For adding SSH keys to remote system use command `ssh-copy-id` which
automates a procedure of adding a key to remote `.ssh/authroized_keys` file.

Regular ssh uses direct TTY access to make sure the password is entered
by an interactive keyboard input. Sshpass runs ssh in a dedicated tty,
folling it into thinking it is getting the password in interactive way.

    sshpass -pMy.Password ssh bastion

## VPN

Basic ad-hoc VPN with SSH is easy to acomplish.
Read this [superuser post][sshvpn1] and
documentation about [sshuttle][sshuttle] which is a kind
of framework in Python to forward selected networks to
remote nodes.



[sshvpn1]: http://superuser.com/questions/62303/how-can-i-tunnel-all-of-my-network-traffic-through-ssh
[sshuttle]: https://github.com/apenwarr/sshuttle/


