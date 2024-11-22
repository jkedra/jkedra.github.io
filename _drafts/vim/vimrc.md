---
layout: post
title:  VimRC
author: jkedra
language: en

jquery: true
js: wikipize

categories: vim
tags: vim
---

Here is my vimrc:

{% highlight vim %}

:" vim:ts=4:fileencoding=utf-8
:" the variable below shows if the current terminal has an ability
:" to display colorfull characters
if &t_Co > 1
   syntax enable
endif

:set background=dark
:set mouse=a
:set ruler
:set history=50
:set modeline
:set sw=4
:set ts=4
:set expandtab
:" highlight search
:set hlsearch

filetype plugin indent on
au BufRead,BufNewFile *.md set filetype=markdown

set viminfo='100,<1000,s20,\"100,:20,

:" autocmd to restore `0 (cursor position after exit)
function! ResCur()
  if line("'\"") <= line("$")
    normal! g`"
    return 1
  endif
endfunction

augroup resCur
  autocmd!
  autocmd BufWinEnter * call ResCur()
augroup END


set backupdir-=.
set backupdir^=~/tmp,/tmp
set backup

{% endhighlight %}

### References
1. help visual.txt
2. help blockwise-operators
3. help mark-motions

[vim]:		we:Vim_(text_editor)
[screen]:	we:GNU_Screen 

