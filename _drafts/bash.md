---
layout: post
title:  "Bash"
author: jkedra
language: pl

jquery: true
jss: [wikipize]

tags: bash
categories: tools
---

1. [Advanced Bash Scripting Guide](http://tldp.org/LDP/abs/html/)
    * [Process Substitution](http://tldp.org/LDP/abs/html/process-sub.html)
    * [Readline Arguments](https://www.gnu.org/software/bash/manual/html_node/Readline-Arguments.html)
2. [GetOpts Tutorial](http://wiki.bash-hackers.org/howto/getopts_tutorial)

## Readline

<kbd>M</kbd> is _Meta_ which in Ubuntu usually means <kbd>Alt</kbd>.
<kbd>C</kbd> is _Ctrl_, in Ubuntu maps to <kbd>Control</kbd> key.

### [Moving Commands](https://www.gnu.org/software/bash/manual/html_node/Readline-Movement-Commands.html#Readline-Movement-Commands)

<kbd>M</kbd>-<kbd>f</kbd> Move forward a word.<br>
<kbd>M</kbd>-<kbd>b</kbd> Move backward a word.

### [Killing Commands](https://www.gnu.org/software/bash/manual/html_node/Readline-Killing-Commands.html#Readline-Killing-Commands)<br>
Killed/yanked/cut-and-pasted content is saved in a _kill-ring_.

<kbd>C</kbd>-<kbd>k</kbd>  Kill the text from the cursor to the end of line.<br>
<kbd>M</kbd>-<kbd>d</kbd>  Kill the text from the cursor to the end of word.
<kbd>M</kbd>-<kbd>DEL</kbd> Kill the text from the cursor to the start of the word.
                            I do not see it working at Ubuntu.<br>
<kbd>C</kbd>-<kbd>w</kbd>   Kill the text from the cursor to the previous whitespace.


<kbd>C</kbd>-<kbd>y</kbd> Yank the most recently killed text back into the buffer at the cursor.<br>
<kbd>M</kbd>-<kbd>y</kbd> Rotate the kill-ring and yank the new top. You can do it only after <kbd>C</kbd>-<kbd>y</kbd> or <kbd>M</kbd>-<kbd>y</kbd>

### Other Commands

Readline key bindings can be printed in bash using `bind -P`.

[Bindable Readline Commands](https://www.gnu.org/software/bash/manual/html_node/Bindable-Readline-Commands.html#Bindable-Readline-Commands)

_edit-and-execute-command_ (<kbd>C</kbd>-<kbd>x</kbd>+<kbd>C</kbd>-<kbd>e</kbd>) - invokes an editor and executes the typed-in command.<br>

