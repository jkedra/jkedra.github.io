---
layout: page
title: PL
permalink: /pl/
language: pl
---
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
