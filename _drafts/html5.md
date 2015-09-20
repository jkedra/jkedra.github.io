---
layout: post
title:  "HTML5"
author: jkedra
categories: www
language: en
tags: html
jquery: true
js: wikipize
css: html5
---

New features of HTML which I think are interesting:

### &lt;q&gt; for short quotation


{% highlight css %}
/* open and closing quotes like in polish */
Q       { quotes: "\201E" "\201D" }
Q:before        { content: open-quote }
Q:after         { content: close-quote }

/* quotes like << >> (IE may lag) */
Q1      { quotes: "\00AB" "\00BB" }
Q1:before       { content: open-quote }
Q1:after        { content: close-quote }
{% endhighlight %}

And results:

<p><Q>Open and closed quotes.</Q></p>
<p><Q1>Using an extra tag (Q1) here we have an << >> quotes.</Q1></p>


### &lt;mark&gt; for marking
{% highlight html %}
Not marked. <mark>Marked.</mark> Not marked.
{% endhighlight %}

Results:
<p>Not marked. <mark>Marked.</mark> Not marked.</p>


### &lt;abbr&gt; for abbreviation
{% highlight html %}
 <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
{% endhighlight %}

Results:
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

