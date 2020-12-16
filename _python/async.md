---
layout: post
title:  "MultiProcessing and Async"
author: jkedra
date: 2020-03-21 20:00
language: pl

jquery: true
jss: [wikipize]

tags: python
---

### Concepts

1. [Concurrent Execution][ce3] in Python 3
    * [Synchronized Queue Class](https://docs.python.org/3/library/queue.html#queue.Queue)
2. [Thread Synchronization Mechanisms in Python](http://effbot.org/zone/thread-synchronization.htm) by Fredrik Lundh (effbot)
3. [Concurrent Futures][futures3] - Launching parallel tasks.
4. [Concurrent.futures vs Multiprocessing in Python 3][fvm] - StackOverflow.

### Async

1. Libraries
    * aiohttp
    * aiopg
    * aiomysql
    * uvloop, another implementation of the event loop.

loop.run_in_executor

#### Videos

1. ["Thinking in Coroutines", Łukasz Langa, PyCon2016](y:l4Nn-y9ktd4)

[ce3]: https://docs.python.org/3/library/concurrency.html
[fvm]: http://stackoverflow.com/questions/20776189/concurrent-futures-vs-multiprocessing-in-python-3
[futures3]: http://stackoverflow.com/questions/20776189/concurrent-futures-vs-multiprocessing-in-python-3

