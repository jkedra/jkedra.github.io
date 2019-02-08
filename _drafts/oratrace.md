---
layout: post
title:  "Tracing Oracle Errors"
author: jkedra
categories: oracle
language: en
---

It is rare for an application to properly handle Oracle DB errors.
By properly I mean solid exception feedback with following information
included:

1. Where the error has occured (not common).
2. What kind of error or error number (common).
3. Which database statement has been submitted, database SQL text (rare).
4. What bind variables were used (unusual).

The most common situation is to expect from a DBA to find out a full SQL
statement when only ORA- is given as a feedback. It is actually possible
to if the DBA has an ability to activate system or session tracing and has
an access to read trace files.

Let's look into some hypothetical scenarios:

## Scenario 1

AWS RDS Oracle database. Full access as an instance administrator.

### Problem

A developer reports an exception from the application and requests help
with determining what SQL is driving it. Only following information
is available:

* `ORA-01438, value larger than specified precision allowed for this column`

No idea what object it is related to.

### Trace

Within RDS we are unable to issue `ALTER SYSTEM SET EVENTS` so the only option
to activate the trace is to do it within each session. It can be acomplished
with `ON LOGON` trigger as follows:

    CREATE OR REPLACE TRIGGER trace1
       AFTER LOGON ON DATABASE WHEN (USER = 'MY_USER')
    BEGIN
       EXECUTE IMMEDIATE q'{ALTER SESSION SET EVENTS='1438 trace name errorstack level 10'}';
    END trace1;
    /

Above run as `MY_USER` creates `MY_USER.TRACE1` trigger which fires only
for `MY_USER`. The event `AFTER LOGON` is a global one but we filter out calling
it by others with `WHEN (USER = 'MY_USER')`.
It demands a little of explanation, why not tracing all other users when
we could be actually interested with global trace?

Unfortunately within Oracle RDS we have no real SYS nor SYSTEM account access.
We operate within AWS created DBA account but it is not real admin access.
If the trace trigger is created in RDS admin account, the `ALTER SESSION`
statement executed within another user context yields with
`ORA-01031: insufficient privileges`. So the only way is to create a trigger
in a way it executes only its own schema context, consequently it means
a separate trigger for each user audited.

### (1) Identify Tracefiles <a name="identify"></a>

Tracefiles can be identified through AWS RDS Web Console but it would be an
overkill and is not the fastest way go access it. Usually the easiest way to
identify the tracefile is to get its name from the related alert.log. In RDS we
cannot access the alert.log as a file. However we can get its content
through in a couple of ways:


#### AWS Specific

There is a [whole guide to Oracle related AWS oddities][2]. It mentions a way
of [accessing Oracle related files][3] through database directories (a schema
object). For your convenience I am quoting some examples below:

<a name="rdsadmin-file-download"></a>

    SELECT * FROM table(rdsadmin.rds_file_util.listdir('BDUMP'))
    ORDER BY mtime;

    SELECT text FROM table(
    rdsadmin.rds_file_util.read_text_file('BDUMP',
                                          'rds-rman-validate-nnn.txt'));


#### Trace by SQL

This method is more generic and was tested for oracle 12.1.

Below the query reporting last 30 minutes of the alert.log:

      SELECT originating_timestamp, process_id, module_id, message_text
        FROM v$diag_alert_ext
          WHERE TRIM(component_id)='rdbms'
            AND CAST(originating_timestamp AS DATE) > SYSDATE-30/1440
            ORDER BY record_id DESC; 

### (2) Error Recreate

Here is a situation leading to `ORA-01438 value larger than precision`:

    CREATE TABLE xtmp (
        id INTEGER,
        value NUMBER(1)
    );
    INSERT INTO xtmp VALUES (1,100);

Looking at alert.log I can see a following entry:

    Errors in file /rdsdbdata/log/diag/rdbms/mysid_a/MYSID/trace/MYSID_ora_31908.trc:
    ORA-01438: value larger than specified precision allowed for this column


### Trace Download

For AWS the most easy way is to use
[rdsadmin.rds_file_util.read_text_file](#rdsadmin-file-download)
method to download the ([already identified](#identify)) file:

Another options is to used the RDS web console but I found it
somehow tiresome.

There is also another way using a dedicated tool to download a remote
file from an Oracle directory.


[1]: http://www.dba-oracle.com/t_grid_rac_events_in_Oracle.htm
[2]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.Database.html
[3]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.Misc.html#Appendix.Oracle.CommonDBATasks.ReadingFiles


