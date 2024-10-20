---
layout: post
title:  PyEnv
author: jkedra
language: en

jquery: true
jss: [wikipize]
---

[PyEnv][pyenv] is similar to [rbenv][rbenv] and allows to use multiple Python
versions simultenously. It means it is able to bind an installed script with
proper virtualenv and appropriate python version. It integrates well with
virtualenv. Really cool stuff.

Below are procedures to install Python 3.6 and 3.13 for Ubuntu and RHEL.
I have tested them with Ubuntu 22-24 and RHEL7.

### Pre requisites

`pyenv` downloads and compiles Python. There is a list of dependencies
which are required in the system before using `pyenv` to compile the Python
installation. Most of packages have been listed below but if something is
missing you can [find it on Google](g:pyenv+common+build+problems).

    # below section you run as root
    # RHEL
    yum install -y zlib-dev openssl-devel sqlite-devel bzip2-devel \
        readline-devel libffi-devel tk-devel curl git

    # or
    dnf install zlib-devel bzip2 bzip2-devel readline-devel sqlite \
        sqlite-devel openssl-devel xz xz-devel

    # UBuntu 22-24
    apt install -y make build-essential libssl-dev zlib1g-dev \
        libreadline-dev tk-dev \
        libsqlite3-dev sqlite3 \
        libncurses5-dev libncursesw5-dev \
        xz-utils liblzma-dev bzip2 libbz2-dev libz-dev  \
        tk-dev curl wget llvm git

    # install then follow onscreen instructions to modify
    # rc files as a local non-root user
    #
    curl -L  https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash

At least for Ubuntu16 I hit a weird problem with `libreadline` being not
properly installed and not recognized by python installator. In such the
case you may try to uninstall the metapackage and install specifically
its 6 version:

    apt remove libreadline-dev libreadline6-dev
    apt install libreadline6-dev

More details on that may be found in
[pyenv issue #1479](https://github.com/pyenv/pyenv/issues/1479).

### Installing Python with pyenv

    pyenv install -l
    pyenv install 3.6.4
    pyenv install 3.13.0
    pyenv version
    pyenv global 3.6.4 3.13.0 system
    pyenv version

If something goes wrong, uninstall the failed version
(eg. `pyenv uninstall 3.6.4`), correct and retry.

Always install virtualenv within the new python version you have created.
You will need virtualenv later:

    pip install virtualenv
    pyenv activate 3.13.0
    pip install virtualenv

### Creating Own VirtualEnv with pyenv

Assume I want to open a new project named `rdspump` to work with python 3.13.0:

    pyenv virtualenv 3.13.0 rdspumptest
    pyenv activate rdspumptest
    pip install cx_Oracle
    pip install rdspump
    pyenv deactivate

The `pyenv virtualenv` creates new virtualenv with the python version 3.13.0.
Then `pyenv activate` fixes the current environment to newly created virtualenv
`rdspump`. And the following `pip install` commands affect only `rdspumptest` virtualenv.
The current virtualenv needs to be deactivated afterwards.

Then when I try to call newly created `rdspump` I get in response:

    $ rdspump
    pyenv: rdspump: command not found

    The `rdspump' command exists in these Python versions:
      3.13.0/envs/rdspumptest
      rdspumptest
    $

My `pyenv` says it has `rdspump` in the rdspumptest virtualenv but
it won't be called because it is not in the path. I can either
add it to the global path or call `pyenv activate rdspumptest` before using
`rdspump` command:

    $ pyenv global 3.13.0 3.6.4 rdspumptest system
    $ rdspump
    At least one argument expected.
    usage: rdspump [-h] [-l [LIST_PROFILES]] [-P PROFILE] [--version]
                   {get,put,del} ...
    $ 

This time `rdspump` has been found in the rdspumptest virtualenv during scanning
pyenv global path. Awesome.

There is in-depth analysis of pyenv/virtualenv/virtualenvwrapper configuration
on this blog blost:
["The Definitive Guide to Setup My Python Workspace"][defguide].

The command `pyenv global precendence_list` is worth some explanation:
It set up search path for python programs. Say you have installed `youtube-dl`
in 3.13.0. If you call it with `python youtule-dl` the python version used will
be



### Updating pyenv

Pyenv does not update itself, the list of available python versions is
the same until pyenv is updated. Pyenv can be updated anytime using git.

    cd $(pyenv root)
    git pull
    pyenv install -l

### More on pyenv

1. [pyenv cheetsheet][pyenv-cs]
2. [pyenv realpython](https://realpython.com/intro-to-pyenv/)

[rbenv]: http://rbenv.org/
[pyenv]: https://github.com/pyenv/
[pyenv-installer]: https://github.com/yyuu/pyenv-installer
[pyenv-cs]: https://github.com/malexer/cheatsheets/blob/master/pyenv.md
[defguide]: https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14#.c8p03tuvp
[python-scl-rh]: https://developers.redhat.com/blog/2018/08/13/install-python3-rhel/
[pipenv]: https://www.youtube.com/watch?v=GBQAKldqgZs
