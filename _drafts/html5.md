---
layout: post
title:  "HTML5"
author: jkedra
categories: www
language: en
tags: html
jquery: true
js: wikipize
---

New features of HTML which I think are interesting:

#### &lt;q&gt; for short quotation


{% highlight css %}
Q       { quotes: "\201E" "\201D" }
Q:before        { content: open-quote }
Q:after         { content: close-quote }

/* cytaty typu << >> (nie w IE) */
Q1      { quotes: "\00AB" "\00BB" }
Q1:before       { content: open-quote }
Q1:after        { content: close-quote }
{% endhighlight %}

{% highlight html %}
<mark>Marked</mark>
{% endhighlight %}

{% highlight html %}
 <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
{% endhighlight %}
