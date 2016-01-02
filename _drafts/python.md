---
layout: post
title:  "Python Itertools"
date:   2015-12-13 19:00:00
author: jkedra
language: en
categories: python
jquery: true
jss: [wikipize]
---

## Python Adventure

I did not find [Python](we:) by myself. I was aware of existence but ignored it.
It is my wife, who dragged the thing to our home. She attended a training and
told me a couple of warm words about it. So I put a little more attention to
Python than I did before. And it did not took much to fall in love with Python -
it became my favourite language. I like do things with Python, I like the beauty
of code imposed by the language structure, I like its design. I like very much
to contemplate beautiful code in Python, I really enjoy it.

Being not a professional Python programmer, I write in it for fun. No pressure,
slow pace, more satisfaction. So even simple discoveries make me wonder.

I thought I learned Python after I read [Dive into Python][DIP] and skimmed over
its [Python 3][DIP3] version. I got familiar with Python tutorial. Then I wrote
some scripts, created some classes, started my adventure with [Django].

I started to feel confident with my skills. The first doubt came when I found
Django documentation not being good enough and I had to dig over its source code.
Some parts were clearly a challenge to me.

I have recently bought two books:

1. _"Fluent Python"_ by Luciano Ramalho
2. and [_"Test Driven Development with Python"_][tddpercival]
   by Harry J.W. Percival

So I started to read "Fluent Python" just to immediately find out I have no idea
what I am reading about. With the first chapter I had no idea about Python's
[collections] and [itertools].

So I started to study [Python's Standard Library][PSL].

## Itertools
[Itertools] are utilities to improve Python's loops.
There are really simple, infinite iterators like
[count()], [repeat()], [cycle()].

{% highlight python %}
>>> from itertools import count, repeat, cycle
>>> [i for i in zip('ABCDEF', count())]
[('A', 0), ('B', 1), ('C', 2), ('D', 3), ('E', 4), ('F', 5)]
>>> [pow(i, j) for i,j in zip(range(10), repeat(2))]
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
>>> "+".join([i for i,_ in zip(cycle('ABC'), range(12))])
'A+B+C+A+B+C+A+B+C+A+B+C'
{% endhighlight %}




[DIP]:  http://diveintopython.net/
[DIP3]: http://www.diveintopython3.net/
[django]: https://www.djangoproject.com/
[tddpercival]: http://chimera.labs.oreilly.com/books/1234000000754/index.html
[PSL]: https://docs.python.org/3/library/
[itertools]: https://docs.python.org/3/library/itertools.html
[collections]: https://docs.python.org/3/library/collections.html
[count()]: https://docs.python.org/3/library/itertools.html#itertools.count
[repeat()]: https://docs.python.org/3/library/itertools.html#itertools.repeat
[cycle()]: https://docs.python.org/3/library/itertools.html#itertools.cycle

