---
layout: post
title:  "Oracle 12c New Features"
author: jkedra
categories: oracle
language: en
---

## ROWS LIMITING

I heard a lot of complains about lack of rows limiting clause in Oracle.
DB2 had it, MySQL had, Postgres but not Oracle. While the Top-n query is
easy achieve using native ROWNUM Oracle's clause, implementing pagination
was relatively challenging task.
Oracle's expert - Tom Kyte - wrote a couple of articles on the subject.

## IDENTITY or AUTO-INCREMENT COLUMN

Another useful feature for schema design which every other database
had already long ago.
Internally it is still a dedicated sequence coupled with an identity column.

### Links
1. [Oracle Base](oracle-base)

[oracle-base]: https://oracle-base.com/articles/12c/identity-columns-in-oracle-12cr1


