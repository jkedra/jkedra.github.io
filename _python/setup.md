---
layout: post
title:  Setup Python
author: jkedra
language: en

jquery: true
jss: [wikipize]
---

## Challenges

Python allows to install only a single version of a library.
If you want another version to be tested or used, you have
to uninstall the old one. In global python environments it leads to
requirements collisions. 

Installing multiple versions of python itself can be confusing.
Usually it is recommended to avoid using system wide python versions.
They are usually well behind the mainstream. 

Links:

1. [How to install the latest Python 3.6 with UBuntu 16.04](http://askubuntu.com/questions/865554/how-do-i-install-python-3-6-using-apt-get#answer-865644)
2. [Pip install throws TypeError](https://stackoverflow.com/questions/37495375/python-pip-install-throws-typeerror-unsupported-operand-types-for-retry)
3. [Kenneth Reitz explaining Python Dependency Management during PyCon 2018.](https://www.youtube.com/watch?v=GBQAKldqgZs)


### PyEnv Way

**[PyEnv][pyenv]**, similar to [rbenv][rbenv], allows to use multiple Python
versions simultenously. Integrates well with virtualenv. It is able to find
the installed version of the tool and run it in a proper virtualenv.
Really cool stuff.

Go here for [full procedure to install modern Python][pyenv] for UBuntu and RHEL.

### RHEL 7 Specific

Redhat supports the most recent Python version in its
Redhat Software Collection repository (rhscl and optional-rpms repo)
and also supports having and using multiple versions of Python.
However it is done on Redhat's specific way using `scl` command (`scl_source`).
More on the subject can be found on
[this blog post][python-scl-rh].


#### including in dot files

Activating environment in `.bashrc` or `.bash_profile` files:

    # Add RHSCL Python 3 to my login environment
    source scl_source enable rh-python36

[rbenv]: http://rbenv.org/
[pyenv]: {{site.url}}{% link _python/pyenv.md %}
[pyenv-installer]: https://github.com/yyuu/pyenv-installer
[pyenv-cs]: https://github.com/malexer/cheatsheets/blob/master/pyenv.md
[defguide]: https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14#.c8p03tuvp
[python-scl-rh]: https://developers.redhat.com/blog/2018/08/13/install-python3-rhel/
[pipenv]: https://www.youtube.com/watch?v=GBQAKldqgZs
