---
layout: post
title:  "HTML5"
author: jkedra
categories: www
language: en
tags: html
jquery: true
js: wikipize
css: [html5]
---

New features of HTML and those I have already forgotten. HTML evolved
a lot since last time I learned it. So this is a time to review
what has changed since then.

## What is new, what is removed in HTML5?

* [HTML4 to HTML5 migration](http://www.w3schools.com/html/html5_migration.asp) -
  a great comparison and article about HTML5.
* [HTML Canvas Tutorial](http://www.w3schools.com/canvas/default.asp)
* [SVG tutorial](http://www.w3schools.com/svg/default.asp)


### deprecated
In older HTML versions, several tags and attributes were used to style documents.
These tags and attributes are not supported in HTML5!

Avoid using the <qq>font</qq>, <qq>center</qq>, and <qq>strike</qq> elements.
Avoid using the color and bgcolor attributes.

### charset differences
For HTML4:
{% highlight html %}
<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">
{% endhighlight %}

For HTML5:
{% highlight html %}
<meta charset="UTF-8">
{% endhighlight %}

### new:
[What is new](http://www.w3schools.com/html/html5_intro.asp) at w3schools.

## Website Layout
HTML5 offers new semantic elements to support website layout.
More details on [w3schools.com](http://www.w3schools.com/html/html_layout.asp).

header |description
-------|----------
nav    |container for navigation links
-------|----------
section|section in a document
-------|-----------------
article|an idependent self-contained article
-------|-----------------
aside  |content aside from the content (a sidebar)
-------|-----------------
footer |for the document or section
-------|-----------------
details|additional details
-------|-----------------
summary|heading for details element

## Tables enhancement

{% assign ary = 'caption colgroup col thead tbody tfoot' | split:" " %}
I am not sure if it is HTML5 which introduced tags
like {% for item in ary %} <qq>{{ item }}</qq>, {% endfor %}
but I did not see them in HTML before.
They are briefly described by [w3schools](http://www.w3schools.com/html/html_tables.asp).

## &lt;q&gt; for short quotation

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

## Forms
I was also not aware of <qq>fieldset</qq> and <qq>legend</qq> tags.
When were they introduced? It was not HTML5 which added them.
More details on [w3schools](http://www.w3schools.com/html/html_forms.asp).

 <form action="#">
  <fieldset>
    <legend>Personal information:</legend>
    First name:<br>
    <input type="text" name="firstname" value="Mickey">
    <br>
    Last name:<br>
    <input type="text" name="lastname" value="Mouse">
    <br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form> 

<br>
There are other tags, HTML5 specific, like datalist, keygen, output.
The tag [<qq>output</qq>](http://www.w3schools.com/html/html_form_elements.asp)
seems to be particularly interesting
because it allows to create highly interactive pages.

HTML5 added [several new input types](http://www.w3schools.com/html/html_form_input_types.asp):

* color ![FF](/img/firefox.gif)![CH](/img/chrome.gif)
* date  ![nFF](/img/nofirefox.gif)![CH](/img/chrome.gif)
* datetime ![nFF](/img/nofirefox.gif)![nCH](/img/nochrome.gif)
* datetime-local ![nFF](/img/nofirefox.gif)![CH](/img/chrome.gif)
* email ![FF](/img/firefox.gif)
* month
* number
* range ![FF](/img/firefox.gif)![CH](/img/chrome.gif)
* search
* tel
* time
* url ![FireFox](/img/firefox.gif)
* week

There are also new input restrictions added.
[W3schools has details](http://www.w3schools.com/html/html_form_input_types.asp).

Input fields can have [various attributes](http://www.w3schools.com/html/html_form_attributes.asp)
like value (initial value), readonly, disabled, size (in chars), maxlength.
HTML5 has added a long list of attributes and among interesting are
pattern (regexp to validate a field), placeholder, required.

