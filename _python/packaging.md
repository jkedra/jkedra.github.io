---
layout: post
title:  Packaging Python
author: jkedra
lang: en
tags: python modules packaging
---

Every Python scripts which is more complex than a single file or depends on
external libraries will not be trivial to install by an end user.

More complex installation is also boring and tiresome, particularly
if it has a number of dependencies, needs multiple steps and
has to be repeated a few times.

Ideally if dependencies were resolved automatically, even better if
there was a centralized repository with it and its dependencies.

Preparing a package and distributing any Python's utility requires
an extra effort but it pays off quickly by the easiness of
the package installation.


1. SetupTools:
    * [Building and Distributing Packages with SetupTools][setuptools2]
    * [PPU Packaging and distributing projects][setuptoolsPPU]
2. [Python Packaging Guide][ppg]
3. [Kenneth Reitz Packaging Guide][krpg]
    * [Pipenv](https://docs.pipenv.org/en/latest/)
    * [Pipenv: The Future of Python Dependency Management, PyCon2018][pipenv2018]
4. [pip-tools]
    * [Pin Your Packages](https://nvie.com/posts/pin-your-packages/)
    * [Better Package Management](https://nvie.com/posts/better-package-management/)
4. [Bill Mills Package Lesson][bm-pl]
5. [The Hitchhikers's Guide to Packaging][hhg2pkg]
6. [Real Python](https://realpython.com/pypi-publish-python-package/)
6. Twine:
    * [Twine ReadTheDocs](https://twine.readthedocs.io/en/latest/)
    * [Twine Man Page](https://www.mankier.com/1/twine#)


## Examples

1. [Uploading to PyPI](https://tom-christie.github.io/articles/pypi/)


[setuptools2]: https://setuptools.readthedocs.io/en/latest/setuptools.html
[setuptoolsPPU]: https://packaging.python.org/guides/distributing-packages-using-setuptools/
[ppg]: https://python-packaging-user-guide.readthedocs.io/
[krpg]: http://docs.python-guide.org/en/latest/shipping/packaging/
[bm-pl]: https://github.com/BillMills/pythonPackageLesson/
[hhg2pkg]: https://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/quickstart.html
[pipenv2018]: https://www.youtube.com/watch?v=GBQAKldqgZs
[pip-tools]: https://github.com/jazzband/pip-tools

