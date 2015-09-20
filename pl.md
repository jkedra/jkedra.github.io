---
layout: page
title: Polskie
permalink: /pl/
language: pl
---
Bywa, że angielski nie ma sensu lub celowo warto ograniczyć
czytelników do tych, którzy znają polskie realia.
Sprawy lokalne, polityka itp.

## Posty po polsku

{% assign language="pl" %}
  <ul class="post-list">
    {% for post in site.posts %}
    {% if post.language == language %}
      <li>
        <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endif %}
    {% endfor %}
 
  </ul>
