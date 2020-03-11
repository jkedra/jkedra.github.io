---
layout: page
title: DB
permalink: /db/
regenerate: true
language: en
---

# Database

{% for item in site.db %}
<ul class="post-list">
  <li>
    <span class="post-meta">{{ item.date | date: "%d.%m.%Y" }}</span>
    <h2>
       <a class="post-link" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
    </h2> {{ item.description }}
  </li>
</ul>
{% endfor %}


# Related Posts

{% assign sectiontags = "db oracle" | split: " " %}
  <ul class="post-list">
    {% for post in site.posts %}
    {% for tag in sectiontags %}
    {% if post.tags contains tag %}
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

