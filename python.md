---
layout: page
title: Python
permalink: /python/
language: en
---

## Python

{% assign category="python" %}
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

