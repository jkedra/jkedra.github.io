---
layout: post
title:  "Testing Python"
author: jkedra
#date: 2017-07-18 20:00
language: pl

jquery: true
jss: [wikipize]

tags: python ipython testing hypothesis pytest
categories: tools
---

## Pytest

[pytest](https://docs.pytest.org/en/latest/)

## Other

[Unit testing](we:)

ipyhon
https://ipython.org/ipython-doc/3/interactive/tutorial.html

https://tox.readthedocs.io/en/latest/examples.html

https://hypothesis.readthedocs.io/en/latest/

## Pythnon Warnings

Warning messages are normally written to `sys.stderr` but their disposition can
be changed flexibly, from ignoring all warnings to turning them into
exceptions. The disposition of warnings can vary based on the warning category,
the text of the warning message, and the source location where it is issued.
Repetitions of a particular warning for the same source location are typically
suppressed.

[warnings module](https://docs.python.org/3/library/warnings.html)

## Hypothesis

It works by letting you write tests that assert that something should be true
for every case, not just the ones you happen to think of.

Think of a normal unit test as being something like the following:

* Set up some data.
* Perform some operations on the data.
* Assert something about the result.

Hypothesis lets you write tests which instead look like this:

* For all data matching some specification.
* Perform some operations on the data.
* Assert something about the result.

It works by generating arbitrary data matching your specification and checking
that your guarantee still holds in that case. If it finds an example where it
doesn’t, it takes that example and cuts it down to size, simplifying it until
it finds a much smaller example that still causes the problem. It then saves
that example for later, so that once it has found a problem with your code it
will not forget it in the future.

[hypothesis.readthedocs.io/](https://hypothesis.readthedocs.io/)

## Factory Boy

Instead of building an exhaustive test setup with every possible combination of
corner cases, factory_boy allows you to use objects customized for the current
test, while only declaring the test-specific fields.

It is similar to Hypothesis.

* [factoryboy.readthedocs.io/](https://factoryboy.readthedocs.io/)
* [Agile Database Integration Tests](https://medium.com/@vittorio.camisa/agile-database-integration-tests-with-python-sqlalchemy-and-factory-boy-6824e8fe33a1)


## Contracts

Provides a collection of decorators that makes it easy to write
software using contracts. Contracts are declarative statements about
what state a program must be in, to be considered correct at runtime.
Contracts serve as a form of documentation and a way of formally
specifying progra behaviour.

* [Design by contract](we:)
* [Python Contracts](https://github.com/deadpixi/contracts) - gitrepo


