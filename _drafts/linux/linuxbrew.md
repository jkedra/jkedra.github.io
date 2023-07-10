---
layout: post
title:  "LinuxBrew"
author: jkedra
date: 2021-07-18 20:00
language: en

tags: linux
categories: linux
---

    brew update
    brew upgrade readline

Python has been installed as
  `/home/linuxbrew/.linuxbrew/opt/python@3.8/bin/python3`

Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
`/home/linuxbrew/.linuxbrew/opt/python@3.8/libexec/bin`

You can install Python packages with

    /home/linuxbrew/.linuxbrew/opt/python@3.8/bin/pip3 install <package>

They will install into the site-package directory
`/home/linuxbrew/.linuxbrew/lib/python3.8/site-packages`

`python@3.8` is keg-only, which means it was not symlinked into
`/home/linuxbrew/.linuxbrew`, because this is an alternate version of another
formula.

If you need to have python@3.8 first in your PATH, run:

    echo 'export PATH="/home/linuxbrew/.linuxbrew/opt/python@3.8/bin:$PATH"' >> ~/.profile

For compilers to find python@3.8 you may need to set:

    export LDFLAGS="-L/home/linuxbrew/.linuxbrew/opt/python@3.8/lib"
    export CPPFLAGS="-I/home/linuxbrew/.linuxbrew/opt/python@3.8/include"

For pkg-config to find python@3.8 you may need to set:

    export PKG_CONFIG_PATH="/home/linuxbrew/.linuxbrew/opt/python@3.8/lib/pkgconfig"



WARNING: The Python readline extension was not compiled. Missing the GNU readline lib?

<https://github.com/pyenv/pyenv/issues/1479#issuecomment-610683526>

This is a larger issue. pyenv should ignore linuxbrew entirely.
If it doesn't import \_curses will fail, causing a lot of libraries to stop working.

I tried manually editing out the homebrew readline usage from my local
python-build. But \_curses was still broken. Then I re-exported my PATH without
linuxbrew, reinstalled my python version, and everything worked like a charm.

# Save so we can revert

    OLD_PATH="$PATH"

# Remove linuxbrew from the path

    export PATH="$(echo $PATH | tr : '\n' | grep -v linuxbrew | paste -s -d:)"

# Install Python

    pyenv install 3.8.2

# revert path

    export PATH=$OLD_PATH

See: <https://docs.brew.sh/Homebrew-and-Python>

==> python@3.9
Python has been installed as `/home/linuxbrew/.linuxbrew/bin/python3`.

Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
  /home/linuxbrew/.linuxbrew/opt/python@3.9/libexec/bin

You can install Python packages with

    pip3 install <package>

They will install into the site-package directory
  `/home/linuxbrew/.linuxbrew/lib/python3.9/site-packages`

See: <https://docs.brew.sh/Homebrew-and-Python>


