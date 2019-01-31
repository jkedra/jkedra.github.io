---
layout: post
title:  Setup Python
author: jkedra
language: en

jquery: true
jss: [wikipize]
---

## Challenges

1. [How to install the latest Python 3.6 with UBuntu 16.04](http://askubuntu.com/questions/865554/how-do-i-install-python-3-6-using-apt-get#answer-865644)
2. [Pip install throws TypeError](https://stackoverflow.com/questions/37495375/python-pip-install-throws-typeerror-unsupported-operand-types-for-retry)

## Useful Tools

### PyEnv

[PyEnv][pyenv], similar to [rbenv][rbenv], allows to use multiple Python
versions. Integrates with virtualenv. Here is a full procedure
to install Python 3.6 for UBuntu and RHEL:


#### Pre-Requisites

`pyenv` downloads and compiles Python. There is a list of dependencies
which are required in the system before using `pyenv` to compile the Python
installation. Most of packages have been listed below but if something is
missing you can [find it on Google](g:pyenv+common+build+problems).

    # RHEL
    yum install -y zlib-dev openssl-devel sqlite-devel bzip2-devel \
        readline-devel libffi-devel tk-devel curl git

    # or
    dnf install zlib-devel bzip2 bzip2-devel readline-devel sqlite \
        sqlite-devel openssl-devel xz xz-devel

    # UBuntu
    apt install -y make build-essential libssl-dev zlib1g-dev \
        libreadline-dev tk-dev \
        libsqlite3-dev sqlite3 \
        libncurses5-dev libncursesw5-dev \
        xz-utils tk-dev bzip2 libbz2-dev libz-dev  \
        curl wget llvm git

    # install then follow onscreen instructions to modify
    # rc files
    curl -L  https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash

#### Installing Python with pyenv

    pyenv install -l
    pyenv install 3.6.4
    pyenv install 3.7.2
    pyenv version
    pyenv global 3.6.4 3.7.2 system
    pyenv version

If something goes wrong, uninstall `pyenv uninstall 3.6.4` correct and retry.

Always install virtualenv within the new python version you have created.
You will need virtualenv later:

    pip install virtualenv
    pyenv activate 3.7.2
    pip install virtualenv

#### Creating Own VirtualEnv with pyenv

Assume I want to open a new project named `rdspump` to work with python 3.7.2:

    pyenv virtualenv 3.7.2 rdspump
    pyenv activate rdspump
    pip install cx_Oracle


    


There is in-depth analysis of pyenv/virtualenv/virtualenvwrapper configuration
on this blog blost:
["The Definitive Guide to Setup My Python Workspace"][defguide].

#### Updating pyenv

Pyenv does not update itself, the list of available python versions is
the same until pyenv is updated. Pyenv can be updated anytime using git.

    $ cd $(pyenv root)
    $ git pull
    $ pyenv install -l

### Distribution Specific Ways

#### RHEL 7

Redhat supports the most recent Python version in its
Redhat Software Collection repository (rhscl and optional-rpms repo)
and also supports having and using multiple versions of Python.
However it is done on Redhat's specific way using `scl` command.
More on the subject can be found on
[this blog post][python-scl-rh].

[rbenv]: http://rbenv.org/
[pyenv]: https://github.com/pyenv/
[pyenv-installer]: https://github.com/yyuu/pyenv-installer
[defguide]: https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14#.c8p03tuvp
[python-scl-rh]: https://developers.redhat.com/blog/2018/08/13/install-python3-rhel/

