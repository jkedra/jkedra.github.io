---
layout: page
title: Go
permalink: /golang/
language: en
jquery: true
jss: [wikipize]
---

## Go in general

1. [go.dev](https://go.dev/) 
    * [/doc](https://go.dev/doc/) - golang entry point
    * [/blog](https://go.dev/blog/) - bedtime readings
    * [/tour](https://go.dev/tour) - A Tour of Go
    * [Effective Go](https://go.dev/doc/effective_go) - must read
2. [Go by Example](https://gobyexample.com/)
3. [Go101.org](https://go101.org/)
    * [Channels in Go](https://go101.org/article/channel.html)
3. [Exercism Go Tracks](https://exercism.org/tracks/go)

## Go Advanced

1. [Strings, bytes, runes and characters](https://go.dev/blog/strings)
2. [Go Slices: usage and internals](https://go.dev/blog/slices-intro)
    * [Standard Libary](https://pkg.go.dev/slices)
3. Regular Expressions
    * [by example](https://gobyexample.com/regular-expressions)
    * [regex101][regex101]
    * [Google re2](https://github.com/google/re2/wiki/Syntax)
4. Templates
    * [How To Use Templates in Go](https://www.digitalocean.com/community/tutorials/how-to-use-templates-in-go)
    * [Standard Library text/template](https://pkg.go.dev/text/template)
4. Interfaces
    * [How to use interfaces in Go](https://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go)

#### Go CLI libraries

* something simple: flag
* if flag is not enough: spf13/pflag
* variable management: spf13/viper

Also see a dedicated section in [Awesome Go](https://awesome-go.com/#standard-cli).

## Go Concurrency

1. [Go: channels, understanding the goroutines deadlocks](https://coffeebytes.dev/en/go/go-channels-understanding-the-goroutines-deadlocks/)
2. [Go Concurrency Patterns](https://www.youtube.com/watch?v=f6kdp27TYZs) - Rob Pike YT

## Go Various

* [Awesome Go][awesomego]
* [Awesome Go Books](https://github.com/dariubs/GoBooks)
* [samber/lo a Lodash-style Go library based on Go 1.18+ Generics](https://github.com/samber/lo)
* [go-ora](https://github.com/sijms/go-ora)
* [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/)


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


[awesomego]: https://awesome-go.com/
[regex101]: https://regex101.com/

