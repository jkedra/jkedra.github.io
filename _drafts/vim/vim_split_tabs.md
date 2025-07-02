---
layout: post
title:  "Edycja wielu plików"
author: jkedra
language: pl 

jquery: true
jss: [wikipize]

tags: vim
categories: vim
---

## Podstawy edycji wielu plików

Można dokonywać edycji kilku plików (równocześnie lub po kolei) bez wychodzenia
z vim i otwierania kolejnego pliku z nowym vimem.

Polecane manuale (`help manual`):

1. _"Editing more than one file"_: `help usr_07`
   
Najprostszą metodą do edycji wielu plików jest wywołanie vima
z listą wszystkich plików do edycji (np. `vim \*.sh`). 

Samą listę plików i bieżący edytowany plik można wyświetlać
i także modyfikować:

{% highlight vim %}
    :args
    :args *.txt
{% endhighlight %}

Przechodzić między plikami używając komend jak niżej
z pewnym modyfikatorami:

{% highlight vim %}
    :next
    :previous
    :wnext
    :2previous
    :first
    :last
{% endhighlight %}

Gdy treść pliku zostanie zmieniona, vim protestuje przed przejściem do
kolejnego pliku. Można wtedy zapisać bieżące zmiany dedykowaną komendą
(`:write`) lub z modyfikatorem 'w' przed komendą, albo odrzucić zmiany
przed przejściem do kolejnego pliku kończąc komendę wykrzyknikiem:

{% highlight vim %}
    :write
    :wnext
    :wprevious
    :previous!
{% endhighlight %}


Modyfikator 'w' nie działa z `:first` i `:last`.

Zamiast zapisywać plik ręcznie można włączyć/wyłączyć automatyczny
zapis przed _opuszczeniem_ pliku:

{% highlight vim %}
    :set autowrite
    :set noautowrite
{% endhighlight %}


Szybkie przełączanie się pomiędzy dwoma plikami, tam i z powrotem,
realizujemy przez <kbd>CTRL</kbd>-<kbd>^</kbd>. To będzie działać
dopiero jeżeli edytujemy drugi w kolejności plik, bezpośrednio po
starcie vima <kbd>CTRL</kbd>-<kbd>^</kbd> nie będzie aktywne.

### Zakładki/markery

    :help 03.10

Można zdefiniować 26 markerów użytkownika, a potem korzystać
z nich w obrębie pojedynczego pliku. Markery tworzy się za pomocą:

    m{mark}

Gdzie `mark` to litery od a do z.

Używa się zakładek na dwa sposoby:

    `{mark}
    '{mark}

Backtick przesuwa kursor do wiersza i kolumny w której został
postawiony marker. Normalny apostrof przesuwa kursor na początek
lini w której jest postawiony marker. Listę wszystkich zakładek
wyciąga się za pomocą komendy `:marks`.

Przy edycji wielu plików można korzystać z możliwości
ustawiania globalnych zakładek (_file marks_, litery od A do Z)
i wtedy przeskakiwanie odbywa się między plikami.


## Tryb Zakładek (tabpage)

Nazwałem to trybem zakładek choć nie jestem pewien jako to przetłumaczyć.
Na zakładce może być otwarte jedno lub więcej okien.

Główne źródło informacji o zakładkach to:

    :help tabpage    (nie tabpages)
    :help tab-page   (nie tab-pages)
    :help usr_08
    :help windows

Otwieranie nowych zakładek:

    vim -p filename ....
    :tabedit file.c

### Nawigacja w zakładkach.

Przechodzenie do następnej lub `{count}` zakładki.

    :{count}tabn[ext]
    :tabn[ext] {count}
    {count}<C-PageDown>
    {count}gt

Analogicznie przechodzenie do poprzednich zakładek:

    :tabp[revious] {count}
    :tabN[ext] {count}
    {count}<C-PageUp>
    {count}gT

Warto zapamiętać kombinację `CTRL-PageDown/PageUp`.

Zamykanie zakładek.

    :tabonly
    :tabc[lose]


Każdą komendę  można poprzedzić przez `:tab {cmd}` - jej rezultat zostanie
otwarty w nowej zakładce. `:tabonly` zamyka wszystkie zakładki oprócz bieżącej.


## Tryb dzielonego okna (window split)

vima w różnych trybach:

1. tryb dzielonego okna (window split) `:help usr_08`
2. tryb zakładek (tabpage)

Zacząć od przeczytania ogólnych helpów najlepiej w kolejności jak niżej:

    :help windows


