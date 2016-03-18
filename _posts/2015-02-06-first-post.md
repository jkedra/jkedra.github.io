---
layout: post
title:  "First Post"
date:   2015-02-06 14:20:50
author: jkedra
categories: www
language: en
tags: jekyll
---

## Why blogging
Why blogging at all? IT knowledge is so wide and wast
- there is no chance I could remember all of it.
Often it happens I learn something and the skill is not used later
for longer time. If had not written it down, I would have forgotten it.
So I developed some ways of storing the information. Starting with
plain files, spread over my Oracle Virtualbox VM. Then I peeked
my friend taking notes in the Google Docs. It had file versioning,
rich format cabapilities. It could be even shared among friends.
I started taking notes there as well. But sharing among friends
is not enough I wanted to share most of them publicly.

Considering above I moved to blogging instead, and
choose [Blogspot] as my platform. I created a couple of posts
during over a year but soon I discovered this is not my choice.
Blogspot was too heavy for me, too slow, too stiff. I could not
breath.  And despite I usually like Google products
(it is owned by Google) I did not like [Blogspot] at all.

Recently I have found [Jekyll], it is static website rendered
from text templates. Posts can be written in [markdown][md]
or [textile]. Both formats are good enough for me, allow for
rich format and media sharing. The content is under git
(actually github) version control.
Looks like it is the solution I was looking for. Geekish enough,
easy to edit, I can take the whole site with me and a single
git push is enough to publish my changes.

## Jekyll

[Markdown syntax][md] is simpler than HTML and [Jekyll] supports it out of the box.
There are myriad extensions for other formats as well including [Textile]. 

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

1. [Jekyll] can be also deployed
   [directly to S3](http://www.jonknapp.com/2013/01/deploying-jekyll-to-s3/).
2. [Jekyll multiple languages][jkyl-lang]
3. [Jekyll Themes](https://github.com/jglovier/jekyll-new)
4. [Jekyll News](https://jekyllrb.com/news/)

## Liquid ##

Some day I discovered [Flask](flask.pocoo.org/) and its
[Jinja templates](http://jinja.pocoo.org/docs/dev/templates/).
And this was a great template system for the web.

Later on, when I found [Jekyll] and its template system -- [Liquid],
I came to me, they (Liquid-Jinja) are similar in syntax.

Posts in Polish:

{% for item in site.posts %}{% if item.language == "pl" %}
1. [{{ item.title }}]({{ item.url }}) {% for t in item.tags %} {{ t }} {% endfor %}
{% endif %}
{% endfor %}

## Sass ##
[Sass][sass] is an extension to CSS, a preprocessor which allows to use
variables, nesting, arithmetic operators.
It also allows to share a set of CSS properties from one selector
to another (@extend). Here is [Sass Reference][sassref].

## CoffeeScript ##

* [Wikipedia on CoffeeScript](https://en.wikipedia.org/wiki/CoffeeScript)
* [CoffeeScript Site](http://coffeescript.org/)

## Markdown

1. [Markdown Syntax][md]
2. [Python Markdown Extensions](https://pythonhosted.org/Markdown/extensions/index.html)
3. [PHP Markdown Extensions](https://michelf.ca/projects/php-markdown/extra/)
3. [pandoc](http://pandoc.org/README.html) [Markdown Extension](http://pandoc.org/demo/example9/pandocs-markdown.html) -
   versatile unix tool to convert between text formats.
4. [Textile Syntax][textile]

[blogspot]:    https://www.blogger.com
[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
[jkyl-lang]:   http://jekyll-langs.liaohuqiu.net/
[liquid]:      http://liquidmarkup.org/
[textile]:     http://redcloth.org/textile
[md]:          http://daringfireball.net/projects/markdown/
[sass]:        http://sass-lang.com/guide
[sassref]:     http://sass-lang.com/documentation/file.SASS_REFERENCE.html
