---
layout: post
title:  "NodeJS"
author: jkedra
date: 2017-08-16 20:00
language: en

jquery: true
jss: [wikipize]

tags: js nodejs
categories: lang
---

* NodeJS Releases: <https://nodejs.org/en/about/releases/>
* <https://node.green/>
* API <https://nodejs.org/dist/latest-v14.x/docs/api/>

## How to start

I tried to start with NodeJS in the past but it did not attract me.
Hopefully I failed because I tried to learn it by myself. Now I am
starting with [Udemy Course][1] - so I expect it to be more successfully
attempt this time.

## Ubuntu Install

First install nodejs, but not like [the course][1] says (it mentions
global install for Mac and Windows), but rather using [this tutorial][2](20.04)
or [this one][3](18.04).

    nvm ls
    nvm ls-remote
    nvm install v14.16.0 
    nvm use v14.16.0
    nvm current
    nvm uninstall v13.9.0

## Packages

* validator
* [yargs][yargs] - a command line parser
* utility: `nodemon` (install global) - re-run node when the file changes.


### yargs

* Homepage <https://github.com/yargs/yargs/>
* [yargs Examples][yrgs-exmp] and [cheetsheet][yrgs-cs].

[1]: https://www.udemy.com/the-complete-nodejs-developer-course-2
[2]: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
[3]: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04
[yargs]: https://github.com/yargs/yargs/
[yrgs-exmp]: https://github.com/yargs/yargs/blob/master/docs/examples.md
[yrgs-cs]: https://github.com/yargs/yargs/wiki


