---
layout: plpost
title:  "Terminator"
author: jkedra
last-update: 2023-09-6
language: pl

jquery: true
jss: [wikipize]

tags: linux
---

Ciekawą alternatywę dla standardowego `gnome-terminal` pokazał mi
ostatnio Jakub Michałek: [Gnome Terminator][1]. Ma podobne ficzer
splitowania ekranu (v/h split) jak Terminal-Preview w Windows 10/11.

Poza podobieństwami do Windows Terminal pozwala na stworzenie zabawnej
"Broadcast Group" - mogę pisać na jednym terminalu, ale wszystkie terminale
z grupy otrzymują ten sam input.

Gdyby nie jego standardowy zestaw kolorów pewnie bym się na niego
całkowicie przełączył, ale póki co wolę zostać przy gnome-terminalu jako
defaulcie.

Kłopot w tym, że samo zainstalowanie terminatora zmienia standardowy
skrót klawiaturowy <kbd>Ctrl></kbd>-<kbd>Alt</kbd>-<kbd>T</kbd>
przypisując mu terminatora zamiast poprzednio ustawionego gnome-terminala.
Można temu zaradzić poprzez tą komendę odpalając `update-alternatives`
i wybierając z menu gnome-terminal.

```bash
sudo update-alternatives --config x-terminal-emulator
```

## Linki
1. [Gnome Terminator][1]
2. [Gnome Terminator opis po polsku][2]
3. [Wyczerpująco o instalacji i deinstalacji terminatora][3]

[1]: https://gnome-terminator.readthedocs.io/en/latest/#
[2]: https://pl.euro-linux.com/blog/terminator-efektywny-i-prosty-emulator-terminala/
[3]: https://linux.how2shout.com/install-terminator-terminal-emulator-in-ubuntu-22-04-lts/

