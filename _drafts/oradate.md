---
layout: post
title:  "Mapping Oracle SQL DATE Data type do Java"
author: jkedra
date: 2017-07-14 16:00
language: pl

jquery: true
jss: [wikipize]

tags: oracle jdbc
categories: database
---

Quite common problem in Oracle 10g - a query on an indexed DATE column,
which is supposed to perform a range scan over the index,
does [FTS](we:Full_table_scan) instead. 

It happens only while using [JDBC](we:) and never with SQL\*Plus.
My guts told me it was because of [bind variables][bv]. And I was right.
The problem was because in JDBC has two date types, one is
`java.sql.Timestamp` and another `java.sql.Date`. The only difference
is their precision (Date gets down only to day precision). While Oracle's
DATE type extends SQL standard and keeps information with seconds resolution.

With Oracle 8i JDBC mapped `oracle.sql.DATE` to `java.sql.Timestamp` to
preserve time component. Starting with 9.0.1 TIMESTAMP support has been
included and JDBC driver started to map
`oracle.sql.DATE` to `java.sql.DATE` which was wrong - time component
has been lost.

To overcome the issue, Oracle 9.2 introduced a new flag `V8Compatible`
(with default=false), which allowed to map Oracle `DATE` to `java.sql.Date`.

The flag `V8Compatible` has been desupported with 11.1 because with this
version added a new flag `mapDateToTimestamp` (default=true).
By default then, the driver maps `oracle.sql.DATE` to `java.sql.Timestamp`
now.

TODO:
In Oracle Database 11g, if you have an index on a DATE column to be used by a SQL query, then to obtain faster and accurate results, you must use the setObject method in the following way:

Date d = parseIsoDate(val);
Timestamp t = new Timestamp(d.getTime());
stmt.setObject(pos, new oracle.sql.DATE(t, (Calendar)UTC_CAL.clone()));

This is because if you use the setDate method, then the time component of the Oracle DATE data will be lost and if you use the setTimestamp method, then the index on the DATE column will not be used.


[bv]: https://blogs.oracle.com/sql/improve-sql-query-performance-by-using-bind-variables
https://docs.oracle.com/cd/E11882_01/java.112/e16548/apxref.htm#JJDBC28920


