---
layout: page
title: Polskie
permalink: /pl/
---
Czy to tylko mój problem w jakim pisać języku? To oczywiste, że
angielski dociera do większej ilości odbiorców. Ale nie chcę
zupełnie rezygnować z mojego języka ojczystego: 
Jest ładny, pisze się łatwo (choć rozwlekle) i nie muszę
co chwila sprawdzać pisowni.

Wybrałem angielski, ale postanowiłem zostawić sobie możliwość
użycia języka polskiego tam gdzie kworum będzie celowo
ograniczone do polskich odbiorców.

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
