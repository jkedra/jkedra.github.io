---
layout: post
title:  Vim Blocks and Marks
author: jkedra
language: en

jquery: true
js: wikipize

categories: vim
tags: vim
tags: blockwise
---

# Visual Blocks

_Blockwise visual mode_

Selecting and moving rectangual areas of text is an activity
I do quite often. Until I have discovered it in [vim], I used
[screen] for this purpose.

 operation        | description               
------------------|---------------------------
[count]<kbd>v</kbd>| visual mode per character 
------------------|---------------------------
[count]<kbd>V</kbd>| visual mode linewise      
------------------|---------------------------
<kbd>CTRL-V</kbd> |  visual mode blockwise    
------------------|----------------------------------------------
<kbd>gv</kbd>     | starts visual mode with the same area as the previous area and the same mode
------------------|----------------------------------------------
<kbd>o</kbd>      | go to the other end of highlighted text
------------------|----------------------------------------

If <kbd>CTRL-V</kbd> is not available (eg. Windows), <kbd>CTRL-Q</kbd> may be used.

Blockwise operations:

oper| doc | description
----|-----|------------
 I  |v_b_I|Visual blockwise Insert
----|-------------------------------------
 A  |v_b_I|Visual blockwise, Append
----|-----|------------
c   |v_b_c| blockwise change, All selected text in the block will be replaced by the same text string.  When using "c" the selected text is deleted and Insert mode started.  You can then enter text (without a line break).  When you hit <Esc>, the same string is inserted in all previously selected lines.
----|-----|-------------------------------------------------------------
C   |v_b_C| Like using "c", but the selection is extended until the end of the line for all lines.
----|-----|-------------------------------------------------------------
>   |v_b_>| The block is shifted by 'shiftwidth'.
----|-----|-------------------------------------
r   |v_b_r| Every screen char in the highlighted region is replaced with the same char
----|-----|---------------------------------------------------------------------------

## Mark Motions

    '[ ']

### References
1. help visual.txt
2. help blockwise-operators
3. help mark-motions

[vim]:		we:Vim_(text_editor)
[screen]:	we:GNU_Screen 

