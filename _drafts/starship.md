---
layout: plpost
title:  "Po prostu prompt"
author: jkedra
date: 2025-12-17 11:00
language: pl

jquery: true
jss: [wikipize]

tags: prompt linux shell
categories: tools
---

Prompt shella to kształt który pewnie już wypalił piksele na mojej siatkówce,
tak jak się wypala logo na telewizorze albo pasek windows na monitorze. Patrzę
na to częściej i dłużej niż na cokolwiek innego, więc dobrze jest nieco zadbać
o jego kształt.

Mój standardowy prompt jaki często używam w bashu ma taki kształt:

    export PS1=

## Starship

Kolega pokazał mi prompt turbo -> [spaceship][1], turbo prompt z elementami
graficznymi. Dużo informacji, elementów graficznych i kolorków.

### Instalacja

Na początku trzeba zainstalować [NerdFonts][2], które chyba same w sobie są
ciekawym zjawiskiem wartym spędzenia popołudnia na poznawaniu tematu.  Sama
główna strona [NerdFonts][2] jest wystarczająca do poznania fontów, ale
instalację najlepiej przeprowadzić z poziomu repozytorium w gicie
[ryanoasis/nerd-fonts][3], a tutaj użyję już [gotowego gista][4].

Weź [tego gista][4], utwórz plik `nerdfonts.sh` i uruchom go:

    #!/bin/bash

    declare -a fonts=(
        # BitstreamVeraSansMono
        # CodeNewRoman
        # DroidSansMono
        FiraCode
        # FiraMono
        # Go-Mono
        # Hack
        # Hermit
        JetBrainsMono
        # Meslo
        # Noto
        # Overpass
        # ProggyClean
        # RobotoMono
        # SourceCodePro
        # SpaceMono
        Ubuntu
        UbuntuMono
    )

    fonts_dir="${HOME}/.local/share/fonts"

    if [[ ! -d "$fonts_dir" ]]; then
        mkdir -p "$fonts_dir"
    fi

    echo -e "\e[0;32mScript:\e[0m \e[0;34mClonning\e[0m \e[0;31mNerdFonts\e[0m \e[0;34mrepo (sparse)\e[0m"
    git clone --filter=blob:none --sparse git@github.com:ryanoasis/nerd-fonts
    cd nerd-fonts

    for font in "${fonts[@]}"; do
        echo -e "\e[0;32mScript:\e[0m \e[0;34mClonning font:\e[0m \e[0;31m${font}\e[0m"
        git sparse-checkout add "patched-fonts/${font}"
        echo -e "\e[0;32mScript:\e[0m \e[0;34mInstalling font:\e[0m \e[0;31m${font}\e[0m"
        ./install.sh "${font}"
    done

    echo -e "\e[0;32mScript:\e[0m \e[0;34mCleaning the mess...\e[0m"
    cd ../
    rm -rf nerd-fonts

Lecimy z tym dalej, ze strony [starship.rs][1] ściągamy instalkę samego
starshipa i instalujemy:

    curl -sS https://starship.rs/install.sh | sh

## Minusy

No więc wbrew zapewnieniom, w zależności od aktywnego modułu, 
starship działa wyraźnie szybciej lub wolniej. Przy braku angażujących wywołań
zachowuje się tak szybko jak normalny prompt, ale wystarczy wejść do katalogu
z repozytorium gita i mamy już opóźnienie jest rzędu 0,5-1 sekundy. 

## Linki

[1]: https://starship.rs/
[2]: https://www.nerdfonts.com/
[3]: https://github.com/ryanoasis/nerd-fonts
[4]: https://gist.github.com/matthewjberger/7dd7e079f282f8138a9dc3b045ebefa0?permalink_comment_id=4563280#gistcomment-4563280

