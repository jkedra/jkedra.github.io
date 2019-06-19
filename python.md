---
layout: page
title: Python
permalink: /python/
language: en
jquery: true
jss: [wikipize]
---

## Development Tools

1. [tox automation project](https://tox.readthedocs.io/en/latest/) -
    standarize testing in Python
    * [tox docker](https://github.com/themattrix/docker-tox/blob/master/README.md)
2. [pytest](pytest)
3. [bump2version](https://github.com/c4urself/bump2version/blob/master/README.md)

## Front

1. [Django](django)
2. [Flask](flask)

## Various

* [Bedtime Reading](bedtime)
* [Stupid Python Ideas Blog][stupid] - tutorials
* [Decorators](decorators)
* [itertools](itertools)
* [Books](learningpython5ed)
* [Quotes](quotes)
* [Python and Oracle](pyora)
* [Setup Python](setup).
* [Packaging Python](packaging)

### Multiprocessing

1. [Concurrent Execution][ce3] in Python 3
    * [Synchronized Queue Class](https://docs.python.org/3/library/queue.html#queue.Queue)
2. [Thread Synchronization Mechanisms in Python](http://effbot.org/zone/thread-synchronization.htm) by Fredrik Lundh (effbot)
3. [Concurrent Futures][futures3] - Launching parallel tasks.
4. [Concurrent.futures vs Multiprocessing in Python 3][fvm] - StackOverflow.

### Visual

1. [Pandas](#pandas)
2. [Seaborn](#seaborn)
3. [Bokeh](#bokeh)
4. [Pygal](#pygal)
5. [Plotly](#plotly)

{: #pandas }
*The Pandas* states for "panel data", a term for multidmensional structured data-set.
Pandas alone has an ability to produce simple tabular plots. However, it is impossible
to customize the graph into more detaild visualisation just by using Pandas.

{: #seaborn }
*Seaborn* is open-source library for data analysis <<and visualisation>>
which integrates with Pandas. Seaborn is popular for making appealing statistical
data graphs.

{: #bokeh }
*Bookeh* was developed by Anaconda's team with funding from [DARPA](we:). Open source project.
An interactive library created for modern web browsers to visualise highly interactive
plots and data applications. Bokeh's method can create any kind of graphical plot
including dash boards and variety of charts. The graph looks much nicer and cleaner.
Bokeh method has a lot of customization option and functionality. Even though it looks nice,
it does not make sense to use for a simple bar visualisation.

{: #pygal }
*Pygal* is a part of Python's library that exports vector chars in different shapes and styles.
Options for visualizations are wide open and include pie chars, bar graphs, histograms,
maps and on.

{: #plotly }
Plotly aka Plot.ly because of its main platform online and interactive.
Everything that is being created with the tool is posted on the web.
Integrates well with Pandas.

1. [Python Data Visualization](https://codeburst.io/overview-of-python-data-visualization-tools-e32e1f716d10?gi=f0417e3fb0f3) - Comparing 5 Tools (Medium)

#### Bokeh

1. [Bookeh Project](https://bokeh.pydata.org/en/latest/)
2. [Data Visualization with Bokeh in Python](https://towardsdatascience.com/data-visualization-with-bokeh-in-python-part-one-getting-started-a11655a467d4) - Medium post

### Geo

1. [Geo-Python 2018](https://geo-python.github.io/2018/)
2. [Automated GIS-process](https://automating-gis-processes.github.io/2018/)
3. [PyKML](https://pythonhosted.org/pykml/index.html)


[stupid]: http://stupidpythonideas.blogspot.com/search/label/tutorial
[ce3]: https://docs.python.org/3/library/concurrency.html 
[fvm]: http://stackoverflow.com/questions/20776189/concurrent-futures-vs-multiprocessing-in-python-3
[futures3]: http://stackoverflow.com/questions/20776189/concurrent-futures-vs-multiprocessing-in-python-3
