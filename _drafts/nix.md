---
layout: plpost
title:  "Nix"
author: jkedra
date: 2026-08-19 12:45
language: pl

jquery: true
jss: [wikipize]

tags: nix
categories: tools
---

* [nixery.dev](http://nixery.dev) - an ad-hoc container image registry that provides packages from the Nix package manager.
* [nix.dev](http://nix.dev) - official documentation for the Nix
    * [Nix Language](https://nix.dev/tutorials/nix-language)
* [nixos.wiki](http://nixos.wiki)
    * [nixos Netboot](http://nixos.wiki/wiki/Netboot)
    * [Python](https://wiki.nixos.org/wiki/Python)
* [Zero to Nix](https://zero-to-nix.com/concepts/flakes/) - nix flakes
* [nix-index](https://github.com/nix-community/nix-index)

## Nix Język

1. [Nix Tutorials](https://nix.dev/tutorials/nix-language)
2. [Zero to Nix](https://zero-to-nix.com/concepts/nix-language/)
3. [Built-ins functions (2.34)](https://nix.dev/manual/nix/2.34/language/builtins.html)
4. Nix Manuals:
    a. [Nix Manual 2.35](https://nix.dev/manual/nix/2.35/)
    b. [Nix Manual (latest)](https://nix.dev/manual/nix/latest/)
    c. [Nix Manual (stable)](https://nix.dev/manual/nix/stable/)
    d. [Nix Manual 2.25](https://nix.dev/manual/nix/2.25/language/syntax)


## Nix Funkcje

1. [Built-ins functions](https://nix.dev/manual/nix/2.34/language/builtins.html)
2. [Operators](https://nix.dev/manual/nix/2.34/language/operators.html)

## Nietypowe operatory

* [Has attribute](https://nix.dev/manual/nix/2.34/language/operators.html#has-attribute) `attrset ? attrpath`
* [Update](https://nix.dev/manual/nix/2.34/language/operators.html#update) `attrset1 || attrset2` - update `attrset1` with names and values from `attrset2`
* [Logical implication](https://nix.dev/manual/nix/2.34/language/operators.html#logical-implication) `bool1 -> bool2`


## Przykłady użycia Nixa

1. [NixVim](https://github.com/nix-community/nixvim)


# Literatura

* [www.haskel.org](https://www.haskell.org/)
* https://dev.to/stablejoy/100-days-of-nixos-346e

# Not Directly Nix Related

* VimWiki
    * https://mkaz.blog/working-with-vim/vimwiki/
    * https://github.com/vimwiki/vimwiki
* eza, apt install eza, eza --icons=always
* https://github.com/nix-community/home-manager
* https://github.com/ajeetdsouza/zoxide
* https://microvm-nix.github.io/microvm.nix/

