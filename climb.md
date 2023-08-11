---
layout: page
title: WspinPL
permalink: /climb/
language: pl
regenerate: true
---

> jak możesz to ci się nie chce, a jak ci się chce to już nie możesz

Tematy wspinaczkowe

{% assign i=site.climb | sort: "date" | reverse %}
{% for item in i %}
<ul class="post-list">
  <li>
    <span class="post-meta">{{ item.date | date: "%d.%m.%Y" }}</span>
    <h2>
       <a class="post-link" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
    </h2> {{ item.description }}
  </li>
</ul>
{% endfor %}
---
{% assign category="climb" %}
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
