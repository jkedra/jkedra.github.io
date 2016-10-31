---
layout: post
title:  "Python and a kid"
author: jkedra
language: en
tags: kids

jquery: true
js: wikipize
comments: true
---

My son Witek, is eleven and its [Python] they start to teach him
at school (4th grade). This is a situation I wouldn't normally dream of.
But since it happens I put much more attention into that.
Their recommended a book is [Python for Kids][PFK].

[Python]: we:Python_(programming_language)
[PFK]: https://www.nostarch.com/pythonforkids

# Interactive

    $ python3
    >>> dir()

## Book: Python for Kids
Nice book, starts nicely, attracts by tempting kids into a game programming.
But after a slow start the pace speeds up, is difficult to follow and
once again leads the kid to a conclusion "_I do not understand,
I cannot understand, it is all black magic._". Good start, poor finish.

## PyGame
At [pythonprogramming.net][pp], there is game-development course
and an "Introduction to Python Programming". This is something to explore
and get useful ideas from there.

[pp]: https://pythonprogramming.net

## Computer Graphics
Definitions (RGB, transparency, gamma, alpha channel),
tools (Pinta, Gimp, MS Paint).

### RGB
Explain what RGB is, how blend colors. Find some color picker on the
net to visualize it.

### Resources
Everyone knows [images.google.com](images.google.com), but there are
miriads of other resources. [Pygame][pygame] lists a lot of them
in _resoures_ section. Some of them worth to mention:
1. [MuseScore](musescore.com)
2. [Morguefile](morguefile.com) - stock photos, good backgrounds.

## Algorithms

### GCD
[Greatest Common Divisor][GCD] is what attracts Witek currently.
Weird, I never thought [algorithms](we:algorithm) attracted him.
Indeed it is not an algorithm itself but a challenge. I realized
that when he started to work on GCD and asked me for help.
I not only gave him hints but even started to write the python
solution for him. And it made him unhappy - because a solution
was not his. He needs only a slight hint and some time to think himself.
He is satisfied with results when he feels he figured it out.
So a question is what really is attracting here? I think it is
creativity - Witek is kind of artist, he does not like to learn
a skillfull craft but he wants to create its own things. 

[GCD]: we:Greatest_common_divisor

## VIM
Man's nature is to share good things with others. And The Editor
is one among primary tools IT folks use. My choice is [vim].

Unfortunately Witek has been taught to write Python in [idle3][idle] at Windows,
so its editor is his natural choice. Vim does not attract him at all.
Obviously I cannot make him use vim but I am planning to gather all
exciting vim features here, in a case of Witek's needs. Maybe some day
he is tempted by vim's beautiful simplicity and its speed.

### Line Numbering
[Idle] cannot make it, vim can do it out of the box by setting
a ruller (`set ruler`), but this shows only cursor location.

There are modules for vim (in neobundle and pathogen) do write in Python,
lint it, highlight syntax and the line numbering is a minimal feauture.
Find them, put them here.

### Windows
Vim windows split work area into to multiple ones.
It can be split vertially and horizontally.
Each window can view the same file on different ones.

Switching windows is easy with <kbd>CTRL</kbd>-<kbd>W</kbd> and
<kbd>H</kbd><kbd>J</kbd><kbd>K</kbd><kbd>L</kbd> combination.
However one may find function keys shortcuts more convenient.

### Tab Pages
In vim `:help tabpage`. 
Closing all tabas with `:qa`

[vim]:          we:Vim_(text_editor)
[screen]:       we:GNU_Screen
[idle]:   	    we:IDLE_(Python)

### Resources

1. [Vimcast] - a lot of interesting stuff but once you get more familiar
   with basics.

[vimcast]: http://vimcast.org


[pygame]:   www.pygame.org
