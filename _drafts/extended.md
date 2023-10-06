---
layout: post
title:  "Extended Statistics (draft)"
date:   2015-08-31 10:43
author: jkedra
categories: db
language: en
tags: oracle
---

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxj
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxx
xxx

{% highlight sql %}

SELECT DBMS_STATS.CREATE_EXTENDED_STATS(NULL,'CLS', '(make, model)')
FROM dual;

SELECT extension_name, extension FROM user_stat_extensions
WHERE table_name='CLS';

BEGIN
   DBMS_STATS.DROP_EXTENDED_STATS(NULL, 'CLS', '(make, model)');
END;
/

{% endhighlight %}



### External Links

1. [DBMS_STATS 11.2][doc112] package documentation.
2. [Managing Column Group Statistics][doc121]
2. [Oracle's Post on Extended Stats][e2]
2. [Nice example][e1]


[doc112]: http://docs.oracle.com/cd/E18283_01/appdev.112/e16760/d_stats.htm
[e1]: http://logicalread.solarwinds.com/extended-optimizer-statistics-in-oracle-11g-improve-performance-jk01
[e2]: https://blogs.oracle.com/optimizer/entry/extended_statistics
[doc121]: http://docs.oracle.com/database/121/TGSQL/tgsql_astat.htm#TGSQL462
