---
layout: post
title:  CSS
date:   2015-08-11 13:30:00
author: jkedra
categories: www
language: en
tags: css
css: [css-snip1, css]
scss: [rcorn]
jquery: true
js: wikipize
---

CSS snippets repository to avoid reinventing the wheel.


### side notes
{% highlight css %}
p.note {
    border-style: solid;
    border-width: 1px;
    border-left-width: 15px;
    padding: 10px;
}
{% endhighlight %}

<p class="note"><b>Note:</b>
    The "border-left-width" property does not work if it is used alone.
    Use the "border-style" property to set the borders first.
</p>

### Attributes Selection
http://www.w3schools.com/css/css_attribute_selectors.asp

attribute       |example           | description
----------------|------------------|------------
[target]        |a[target]         | selects <qq>a</qq> elements with a target attribute
----------------|------------------|------------
[attr="val"]   |a[target]="_blank"]|
----------------|------------------|------------
[attr~="val"]   |[title~="flower"] |selects element with an attribute val containing specified (whole) word
----------------|------------------|------------
[attr&#124;="val"]|[class&#124;="top"]|selects el with an attribute starting with word (whole word): top-gun
----------------|------------------|------------
[attr^="val"]   |[class^="top"]    |selects el with an attribute starting with a string (not whole word): topgun
----------------|------------------|------------
[attr$="val"]   |[class$="top"]    |selects el with an attribute ending with a string (not a whole word ): guntop
----------------|------------------|------------
[attr*="val"]   |[class*="top"]    |selects el containing specified string (not a whole word): gutopgun
----------------|------------------|------------

### CSS3 Rounded Corners

With CSS3, you can give any element "rounded corner", by using the
[border-radius property](http://www.w3schools.com/css/css3_borders.asp).

<p id="rcorners1">
Here is for the background.
</p>

<p id="rcorners2">
This example is for the border.
</p>

<p id="rcorners3">
This example is for a background image.
</p>

<p id="clearb"> </p>

### CSS3 Shadow Property
At example above (CSS3 Rounded Corners) you can clearly see shadowed boxes.
This is how box-shadow property works. The text-shadow property is applied
to each h3-h5 header.

The subject is elaborated at
[W3Schools](http://www.w3schools.com/css/css3_shadows.asp).

## CSS3 Backgrounds

### CSS3 Border Images

1. At Google Images there are
   [tons of background images](https://www.google.com/search?tbm=isch&q=border+image+png).
2. [Border Image Generator](http://border-image.com)
3. [W3Schools Border Images](http://www.w3schools.com/css/css3_border_images.asp)

### CSS3 Multiple Backgrounds

<div id="background1">
CSS3 allows you to add multiple background images for an element.
The different background images are separated by commas,
and the images are stacked on top of each other.
</div>

<br>
More details on CSS3 backgrounds may be found at
[W3Schools](http://www.w3schools.com/css/css3_backgrounds.asp).

### CSS3 Gradients

<div class="grbox" id="grad1">Diagonal Gradients</div>
<div class="grbox" id="grad2">7 Color Stops</div>
<div class="grbox" id="grad3">Radial Gradients</div>
<div id="clearb"></div>

Multiple options are available. A lot of example can be found
at [W3Schools](http://www.w3schools.com/css/css3_gradients.asp).


## CSS
1. [Learn Layout](http://learnlayout.com/) - CSS layouts explained.
2. [CSS W3 Schools][csslrn1] - CSS tutorial, a lot of editable examples.
3. [CSS color names][csscol1]
4. [Border Image Generator](http://border-image.com)

### Sass
1. [Syntactically Awesome StyleSheets][Sass]
2. [Sass Reference][sassref]
3. [Sass Playground](saasmeister.com) - check how your CSS looks like.
4. [Sass vs Less](https://css-tricks.com/sass-vs-less/),
   [Less wiki](we:Less_%28stylesheet_language%29)

### Bootstraps
1. [Bootstrap](http://getbootstrap.com/)
2. [W3CSS](http://www.w3schools.com/w3css/default.asp)

[csslrn1]:     http://www.w3schools.com/css/
[cssref1]:     http://www.w3schools.com/cssref/
[csscol1]:     http://www.w3schools.com/cssref/css_colornames.asp
[ltw]:         https://developer.mozilla.org/en-US/Learn
[js-basics]:   https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics
[sass]:        http://sass-lang.com/guide
[sassref]:     http://sass-lang.com/documentation/file.SASS_REFERENCE.html
