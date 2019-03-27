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

# Replace

#### [SQL*Plus](we:) problem:


Replace all `FSE` but not `&FSE` strings (not these starting with `&` sign) by
`&FSE.` (with ending dot). Interactive (`c` in flags) and for all line
occurences (`g` in flags).

{% highlight vim %}
{% raw %}

:%s/&\@<!\(FSE\.\?\)/\&\1./cg

{% endraw %}
{% endhighlight %}

#### Replace 2

Enclose `ssXXX.sql` lines with RUNNING \n COMPLETED\n:

{% highlight vim %}
{% raw %}
'<,'>s/\v(ss.+sql)/PROMPT RUNNING SCRIPT: \1^M@@\1^MPROMPT SCRIPT COMPLETED: \1^M/
{% endraw %}
{% endhighlight %}




### References
1. `help regexp`
2. `help magic`
3. `help /multi`
4. `help /\@!`

[vim]:		we:Vim_(text_editor)

