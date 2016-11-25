---
layout: post
title:  all_tab_cols
author: jkedra
categories: oracle
language: en
---

This is about Oracle database.
There is a view like `{ALL|DBA|USER}_TAB_COLUMNS` which can be used to extract
a list of columns for a given table. It has its counterpart ending with
`cols` instead of `columns`. What a nice shortcut, isn\'t it?

Well, it is not just a synonym. [Oracle 121 manual says][1] there is one crucial
difference between columns and cols: *This view (ALL_TAB_COLUMNS) filters out
system-generated hidden columns and invisible columns,
which are user-generated hidden columns. The ALL_TAB_COLS view does not filter
out hidden columns and invisible columns.*

Pretty, huh? I did not know the detail. I accidentaly stumbled upon it,
when I discovered some unwanted extra columns in ALL_TAB_COLS. Reported
as _a schema difference_.

[1]: https://docs.oracle.com/database/121/REFRN/GUID-F218205C-7D76-4A83-8691-BFD2AD372B63.htm#REFRN20277

