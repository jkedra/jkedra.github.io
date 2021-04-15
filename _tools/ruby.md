---
layout: post
title:  "Ruby"
author: jkedra
language: en
---

## Environment and Installation

Last update: 2020-12-16

### Links

1. In [Rubygems Guides][rgg-ref_env]
   there is an information how to configure proxy variables
   (`HTTP_PROXY`, `HTTP_PROXY_USER`, `HTTP_PROXY_PASS`)
2. In [Rubygems Guides][rgg-ref]
   there is a way to perform user install (local) by using
   `--user-install` flag for [gem-install][rgg-ref_inst].

### Ruby at Ubuntu without apt-get

There was a blog entry of Ryan Bigg saying 
[First install Ruby and do not use `apt-get`][rruby].
Ryan's installation makes sense because it gives the latest version of Ruby.
And this is what I want when running - for example - Jekyll.
(Actually [ruby 2.4.0 fails][ruby240fail] for Jekyll).
Ryan simply says:
_Under no circumstance should you install Ruby, Rubygems or any Ruby-related
packages from apt-get. This system is out-dated and leads to major headaches.
Avoid it for Ruby-related packages. We do Ruby, we know what's best. Trust us._
[Read it yourself][rruby].

His blog was misconfigured recently so in a case it does not work again,
I am copying essentials of his procedure + some updates:

### Installing Ruby

_This is slightly updated and briefed version of [original article][rruby]._

First we fetch the latest [ruby-install][rubyinstall] file, extract it into a
directory, then make it.

    sudo apt install build-essential
    wget -O ruby-install-0.8.1.tar.gz \
        https://github.com/postmodern/ruby-install/archive/v0.8.1.tar.gz
    tar -xzvf ruby-install-0.8.1.tar.gz
    cd ruby-install-0.8.1/
    sudo make install

You can verify that these steps have worked by running the following command:

    $ ruby-install -V
    ruby-install: 0.8.1
    $ ruby-install
    >>> Downloading latest truffleruby versions ...
    >>> Downloading latest truffleruby-graalvm versions ...
    Stable ruby versions:
      ruby:
        2.6.7
        2.7.3
        3.0.1
      jruby:
        1.7.26
        9.1.6.0
      rbx:
        2.71828182
        3.69
      truffleruby:
        21.0.0
      truffleruby-graalvm:
        21.0.0
      mruby:
        1.2.0
    $ ruby-install ruby 2.7.3
    >>> Installing ruby 2.7.3 into /home/jxa/.rubies/ruby-2.7.3 ...
    >>> Installing dependencies for ruby 2.7.3 ...
    [...]


_Our next step is to install the latest Ruby itself,
which we can do with this command:_

    ruby-install --latest ruby

Once it's done, we'll have Ruby 3.0.1 installed (Apr 15th 2021).
In order to use this Ruby
version, we'll need to install chruby as well. The instructions can be found in
[chruby's README][chruby] too.

    wget -O chruby-0.3.9.tar.gz \
        https://github.com/postmodern/chruby/archive/v0.3.9.tar.gz
    tar -xzvf chruby-0.3.9.tar.gz
    cd chruby-0.3.9/
    sudo make install
    
After this has been installed, we'll need to load chruby automatically, which
we can do by adding these lines to your shells configuration file using the
following command:

    cat >> ~/.$(basename $SHELL)rc <<EOF
    source /usr/local/share/chruby/chruby.sh
    source /usr/local/share/chruby/auto.sh
    EOF

In order for this to take effect, we'll reload the shell:

    exec $SHELL

To verify that chruby is installed and has detected our Ruby installation, run
chruby. If you see this, then it's working:

    $ chruby ruby-3.0.1
    $ ruby -v
    ruby 3.0.1p64 (2021-04-05 revision 0fb782ee38) [x86_64-linux]


Now we need to make that Ruby the default Ruby for our system, which we can do
by creating a new file called `~/.ruby-version` with this content:

    ruby-3.0.1

This file tells chruby which Ruby we want to use by default. To change the
ruby version that we're using, we can run chruby ruby-2.3.3 for example --
assuming that we have Ruby 2.3.3 installed first!

Did this work? Let's find out:

    $ ruby -v
    ruby 2.3.3p222 (2016-11-21 revision 56859) [x86_64-linux]

## Programming

### Resources

1. [Ruby Programming](https://en.wikibooks.org/wiki/Ruby_Programming)
    on wikibooks
2. [Programming Ruby](http://ruby-doc.com/docs/ProgrammingRuby/)
    by Yukihiro Matsumoto

[rruby]:        http://ryanbigg.com/2014/10/ubuntu-ruby-ruby-install-chruby-and-you
[rubyinstall]:  https://github.com/postmodern/ruby-install#install
[chruby]:       https://github.com/postmodern/chruby#install
[ruby240fail]:  https://github.com/rails/rails/issues/27450
[rgg-ref]:      http://guides.rubygems.org/command-reference/
[rgg-ref_env]:  http://guides.rubygems.org/command-reference/#gem-environment
[rgg-ref_inst]: http://guides.rubygems.org/command-reference/#gem-install


