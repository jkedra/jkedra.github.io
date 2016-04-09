---
layout: page
title: Python
permalink: /python/
language: en
---

{% assign excluded = "content|previous|next|excerpt|docs" | split: "|" %}


[Stupid Python Ideas Blog](http://stupidpythonideas.blogspot.com/search/label/tutorial)

<ol>
{% for post in site.documents %}
{% if post.collection == "python" %}
<li> <ul>
     {% for item in post %}
     <li><b>{{ item[0] }}</b> :
          {% if excluded contains item[0] %}⋯ {% else %} {{ item[1] }} {% endif %} </li>
     {% endfor %}
     </ul>
</li>
{% endif %}
{% endfor %}
</ol>


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

