---
layout: post
title:  "First Post"
date:   2015-02-06 14:20:50
author: jkedra
categories: jekyll
---
[Markdown syntax][md] looks incredibly simple and [Jekyll][jekyll] supports it out of the box.
But there are myriad extensions for other formats as well including [Textile][textile]. 

Jekyll also offers powerful support for code snippets:

{% highlight python %}
from sgmllib import SGMLParser

class URLLister(SGMLParser):
	def reset(self):
		SGMLParser.reset(self)
		self.urls = []

	def start_a(self, attrs):
		href = [v for k, v in attrs if k=='href']
		if href:
			self.urls.extend(href)
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

## References ##

1. [Markdown Syntax][md]
2. [Textile Syntax][textile]

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
[textile]:     http://redcloth.org/textile
[md]:          http://daringfireball.net/projects/markdown/
