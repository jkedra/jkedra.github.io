---
layout: page
title: IT
permalink: /it/
regenerate: true
language: en
---
This page groups posts which are related to:

1. SysAdm - system administration
2. Oracle (database)
3. Programming

# Tools

{% for item in site.tools %}
<ul class="post-list">
  <li>
    <span class="post-meta">{{ item.date | date: "%d.%m.%Y" }}</span>
    <h2>
       <a class="post-link" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
    </h2> {{ item.description }}
  </li>
</ul>
{% endfor %}


# Other IT posts

{% assign sectioncategories = "www it tools" | split: " " %}
  <ul class="post-list">
    {% for post in site.posts %}
    {% for category in sectioncategories %}
    {% if post.categories contains category %}
      <li>
        <span class="post-meta">{{ post.date | date: "%d.%m.%Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endif %}
    {% endfor %} 
    {% endfor %}
  </ul>
