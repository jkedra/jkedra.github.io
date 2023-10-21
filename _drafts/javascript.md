---
layout: post
title:  "JavaScript and Node.js"
author: jkedra
date: 2023-10-21
language: en

jquery: true
jss: [wikipize]

tags: js node
categories: lang
---

# Javascript

1. [JavaScript](we:) on Wiki
2. [JavaScript syntax](we:) on Wiki
    * [Scoping and hoisting][1]
3. [List of JavaScript libraries](we:) on Wiki
4. [JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
5. Udemy Resources:
    * [Advanced Javascript][2] by Asim Husain - very concise, knowledge-condensed,
      in a form of an interview questions with answers.
    * [Asynchronous Javascript][3] another advanced course by Asim Hussain,
      no time wasted.
    

# NodeJS

* NodeJS Releases: <https://nodejs.org/en/about/releases/>
* <https://node.green/>
* API <https://nodejs.org/dist/latest-v14.x/docs/api/>

## How to start

I tried to start with NodeJS in the past but it did not attract me.
Hopefully I failed because I tried to learn it by myself. Now I am
starting with [Udemy Course][n1] - so I expect it to be more successfully
attempt this time.

## Ubuntu Install

First install nodejs, but not like [the course][n1] says (it mentions
global install for Mac and Windows), but rather using [this tutorial][n2](20.04)
or [this one][n3](22.04 - option 3).

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    source ~/.bashrc
    nvm ls
    nvm ls-remote
    nvm install v16.17.0
    nvm use v16.17.0
    nvm current
    nvm uninstall v13.9.0

## Packages

* validator
* [yargs][yargs] - a command line parser
* utility: `nodemon` (install global) - re-run node when the file changes.


### yargs

* Homepage <https://github.com/yargs/yargs/>
* [yargs Examples][yrgs-exmp] and [cheetsheet][yrgs-cs].

### ExpressJS

1. [ExpressJS.com](http://expressjs.com/en/api.htm#res.end)
1. [ExpressJS.com, Writing Middleware](http://expressjs.com/en/guide/writing-middleware.html)
2. [How to Build a Node.js App with Express and Pug](http://betterstack.com/community/guides/scaling-nodejs/build-nodejs-application-express-pug/)

[n1]: https://www.udemy.com/the-complete-nodejs-developer-course-2
[n2]: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
[n3]: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04
[yargs]: https://github.com/yargs/yargs/
[yrgs-exmp]: https://github.com/yargs/yargs/blob/master/docs/examples.md
[yrgs-cs]: https://github.com/yargs/yargs/wiki



[1]: https://en.wikipedia.org/wiki/JavaScript_syntax#Scoping_and_hoisting
[2]: https://www.udemy.com/course/javascript-advanced/
[3]: https://www.udemy.com/course/asynchronous-javascript/

