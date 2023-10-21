---
layout: page
title: MotoPL
permalink: /moto/
regenerate: true
language: pl
---

<blockquote>
Tam gdzie jest asfalt, nie ma nic ciekawego. A gdzie jest coś ciekawego?
Tam gdzie nie ma asfaltu.
</blockquote>

## Zasoby

### Fora

* [Forum Transalp Club Polska][tcp]
* [Honda Trail Bikies Forum](https://www.xrv.org.uk/forums/forum.php) and its [Transalp subforum](https://www.xrv.org.uk/forums/transalp.35/page-2).
* [Forum Africa Twin](http://africatwin.com.pl/)

### Techniczne
1. [Porównanie XL650 kontra XT660R](http://forum.transalpclub.pl/viewtopic.php?f=191&t=14314)

### Blogi motocyklowe
1. Motohoryzont, był kiedyś taki blog o podróżach Janusza Osadzińskiego.
   Nie mogłem się od tego oderwać, niestety gdzieś to zniknęło i nie jest
   dostępne.
2. [Pozytywnie do przodu][pdp] - Marek Remiszewski, ekonomicznie i ambitnie,
   mnóstwo przepięknych zdjęć.
3. [Trudne jazdy](http://forum.transalpclub.pl/viewtopic.php?f=46&t=15515&start=280) z
   [forum.transalpclub.pl](http://forum.transalpclub.pl/) oraz z [mototrud.pl](http://mototrud.pl).

[pdp]: http://pozytywniedoprzodu.blogspot.com
[mh]: https://cargocollective.com/MOTOHORYZONT


### Ciekawe wyprawy
1. [Pozytywnie do przodu][pdp],
  [Moroccooff-2015](http://pozytywniedoprzodu.blogspot.com/p/moroccooff-2015.html),
  [tutaj ta sama relacja na TCP](http://forum.transalpclub.pl/viewtopic.php?f=42&t=18063).
2. [Theth opisany przez Qtera](http://forum.transalpclub.pl/viewtopic.php?f=42&t=19295),
   dużo obrazków, wiele detali na temat pętli Theth.
3. [Long Way Round](https://www.youtube.com/watch?v=WYC6Ux5FaAo&list=PLiWx0MbkXTL_eneIUnYibJtgxUM-Jh-Dt) -
    wyprawa Ewan'a McGregor'a i Charley'a Boormana przez Europę, Azję i 
    Północną Amerykę.

## Trasy

### Opisane gdzie indziej
1. [10 najpiękniejszych tras](http://motovoyager.net/2015/01/polskie-drogi-10-najpiekniejszych-tras-motocyklowych-polsce/) wg [motovoyager](motovoyager.net).
2. [Transalpem](http://transalpem.blogspot.com/)

### Dalsze Trasy

1. [Transfogarska & Transalpina][rumunia1]
2. [Nordkapp](http://motohoryzont.com/na-NORDKAPP-motocyklem)

[tcp]:       http://forum.transalpclub.pl/
[msm]:       http://szkola-motocyklowa.pl/
[rumunia1]:  http://msm.malopolska.pl/?page=news&id=91
[transalp]:  http://pl.wikipedia.org/wiki/Honda_Transalp#Honda_XL650V_Transalp "XL650V Transalp"


{: #posty }
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
