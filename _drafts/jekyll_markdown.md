---
layout: post
title:  "Jekyll's Markdown"
date:   2019-04-23
author: jkedra
language: en
categories: www
tags: javascript css jquery jekyll markdown
---

page.categories: {{ page.categories }}

page.tags: {{ page.tags | join:', ' }}


## Images

Examples from [Stack Overflow][1].
Also examples from post [Lód i Mikst](/_lod_i_mikst)
and [Czerwone Wierchy](/trips/2017/01/29/tatry.html).
And [another post][2] on the image alignment.


### nice trick with markdown images
On order, right, left, centered:

First include this CSS:

{% highlight css %}
{% raw %}

img[alt$=">"] {
  float: right;
  margin-left: 20px;
}

img[alt$="<"] {
  float: left;
  margin-right: 20px;
}

img[alt$="<>"] {
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
    float: none!important;
}
{% endraw %}
{% endhighlight %}


then in HTML:

{% highlight markdown %}
{% raw %}

    ![Image alt >]({{ site.url }}/img/image.jpg)
    ![Image alt <]({{ site.url }}/img/image.jpg)
    ![Image alt <>]({{ site.url }}/img/image.jpg)

{% endraw %}
{% endhighlight %}

## Tables

[Tables1][4].


## Themes

[Documentation Theme][3].


[1]: https://stackoverflow.com/questions/19075023/flow-text-around-an-image-in-github-markdown
[2]: http://stackoverflow.com/questions/255170/markdown-and-image-alignment

[3]: https://idratherbewriting.com/documentation-theme-jekyll/index.html
[4]: https://idratherbewriting.com/documentation-theme-jekyll/mydoc_tables.html
