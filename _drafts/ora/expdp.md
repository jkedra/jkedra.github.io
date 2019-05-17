---
layout: post
title:  Export Import DataPump
author: jkedra
categories: oracle
language: en
---

Getting a consistent snapshot of a database is fundamental activity
for database related application maintenance. In the past (<= Oracle 10)
the consistency was achived by specyfying `CONSISTENT=Y` parameter
for the utility `exp`.

## PROBLEM

With 10.1 the expdp utility appeared with the whole different way of
making exports.

Versions 10.1 and 10.2 started to put the message in expdp header:

    FLASHBACK automatically enabled to preserve integrity.

Does it mean the dump is automatically guaranteed being consistent?
Does it guarantee export consistency to a single point of time?

Unfortunately the message means nothing for us. According to [377218.1]
it means _that some of the tables will be assigned special SCNs
(needed for Streams and Logical Standby).
There is no consistency guaranteed between exported tables._.

## SOLUTION

Beginning with 11gR2, we can use:

    expdp system/passwd consistent=y

The parameter CONSISTENT is internally changed to:

    Legacy Mode Parameter: "consistent=TRUE"
        Location: Command Line,
        Replaced with: "flashback_time=TO_TIMESTAMP('2011-11-21 09:31:46',
                                                    'YYYY-MM-DD HH24:MI:SS')"

which corresponds to SYSTIMESTAMP.

[377218.1]: https://support.oracle.com/epmos/faces/DocumentDisplay?id=377218.1


