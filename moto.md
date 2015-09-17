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

### Techniczne
1. [Porównanie XL650 kontra XT660R](http://forum.transalpclub.pl/viewtopic.php?f=191&t=14314)

### Blogi motocyklowe
1. [Motohoryzont][mh] - podróże motocyklowe Janusza Osadzińskiego.
   Nie mogłem się od tego oderwać.
2. [Pozytywnie do przodu][pdp] - Marek Remiszewski, ekonomicznie i ambitnie,
   mnóstwo przepięknych zdjęć.

[pdp]: http://pozytywniedoprzodu.blogspot.com
[mh]: http://motohoryzont.com/


### Ciekawe wyprawy
1. [Pozytywnie do przodu][pdp],
  [Moroccooff-2015](http://pozytywniedoprzodu.blogspot.com/p/moroccooff-2015.html),
  [tutaj ta sama relacja na TCP](http://forum.transalpclub.pl/viewtopic.php?f=42&t=18063).
2. [Theth opisany przez Qtera](http://forum.transalpclub.pl/viewtopic.php?f=42&t=19295),
   dużo obrazków, wiele detali na temat pętli Theth.

## Trasy

### Opisane gdzie indziej
1. [10 najpiękniejszych tras](http://motovoyager.net/2015/01/polskie-drogi-10-najpiekniejszych-tras-motocyklowych-polsce/) wg [motovoyager](motovoyager.net).
2. [Transalpem](http://transalpem.blogspot.com/)

### Dalsze Trasy

1. [Transfogarska & Transalpina][rumunia1]
2. [Nordkapp](http://motohoryzont.com/na-NORDKAPP-motocyklem)

## Źródła

2. [Transalp Club Polska](http://forum.transalpclub.pl/)
3. [Africa Twin Forum](http://africatwin.com.pl/)

[msm]:       http://szkola-motocyklowa.pl/
[rumunia1]:  http://msm.malopolska.pl/?page=news&id=91
[transalp]:  http://pl.wikipedia.org/wiki/Honda_Transalp#Honda_XL650V_Transalp "XL650V Transalp"


## Moje Posty Moto

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
