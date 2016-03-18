---
layout: post
title:  "jQuery (draft)"
date:   2015-08-08 09:32:00
author: jkedra
categories: www
language: en
categories: wwww
tags: javascript css jquery
---

Documentation: [jQuery]

<p id="test"><input type="text"><span>Test Paragraph</span></input></p>
<p class="testowa">Testowa</p>

<script>
 $("p#test").on("blur", function() {
    var elem = $(this);
    elem.hide("fast");
    elem.show("slow");
    console.log("event.focus");
 });

 $("p.testowa").hide("fast");
 $("p.testowa").show("slow");

 $
</script>

[ltw]:         https://developer.mozilla.org/en-US/Learn
[js-basics]:   https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics
[jquery]:      https://jquery.com/
[jql]:         http://learn.jquery.com/
[jinja]:       http://jinja.pocoo.org/
[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
[liquid]:      http://liquidmarkup.org/
[textile]:     http://redcloth.org/textile
[md]:          http://daringfireball.net/projects/markdown/
[sass]:        http://sass-lang.com/guide
[sassref]:     http://sass-lang.com/documentation/file.SASS_REFERENCE.html
