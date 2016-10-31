---
layout: post
title:  Vim Regexp
author: jkedra
language: en

jquery: true
js: wikipize

categories: vim
---

# Remove all lines but matching one

{% highlight vim %}
{% raw %}
:%s/\v^(CREATE SEQUENCE)@!.*\n//g
{% endraw %}
{% endhighlight %}


### References
1. help regexp
2. help magic
3. help /multi
4. help /\@!

[vim]:		we:Vim_(text_editor)

