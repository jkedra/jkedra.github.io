---
layout: post
title:  Setup Python
author: jkedra
language: en
---

## Challenges

1. [How to install the latest Python 3.6 with UBuntu 16.04](http://askubuntu.com/questions/865554/how-do-i-install-python-3-6-using-apt-get#answer-865644)

## Useful Tools

### PyEnv

[PyEnv](pyenv), similar to rbenv, allows to use multiple Python
versions. Integrates with virtualenv. Here is a full procedure
to install Python 3.6 for UBuntu and RHEL:

    # install then follow onscreen instructions to modify
    # rc files
    curl -L  https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash

    # RHEL
    yum install -y zlib-dev openssl-devel sqlite-devel bzip2-devel \
        readline-devel

    # UBuntu
    apt install libsqlite3-dev sqlite3 bzip2 libbz2-dev 

    pyenv install 3.6.0

If something goes wrong, uninstall `pyenv uninstall 3.6.0` correct and retry.


[pyenv]: https://github.com/yyuu/pyenv
[pyenv-installer]: https://github.com/yyuu/pyenv-installer
