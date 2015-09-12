---
layout: page
title: MotoPL
permalink: /moto/
language: pl
---
Ta strona grupuje polskie posty na temat motocykli.

## Zasoby

### Fora
* [Forum Transalp Club](http://forum.transalpclub.pl)

### Blogi motocyklowe
* [Pozytywnie do przodu][pdp]

[pdp]: http://pozytywniedoprzodu.blogspot.com


### Ciekawe wyprawy
* [Pozytywnie do przodu][pdp],
  [Moroccooff-2015](http://pozytywniedoprzodu.blogspot.com/p/moroccooff-2015.html)

## Posty

{% assign category="moto" %}
  <ul class="post-list">
    {% for post in site.posts %}
    {% if post.categories contains category %}
      <li>
        <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endif %}
    {% endfor %}
 
  </ul>
