---
layout: post
title:  "SQLite3"
author: jkedra
language: pl

jquery: true
jss: [wikipize]

tags: sqlite
categories: tools
---

[SQLite3][sqlite] jest niewielką bazą danych o szerokich możliwościach
w zestawieniu do jej niewielkich wymagań. Z tego względu jest powszechnie
używana np. w telefonach (Android, iPhone), Windows10, inteligentnych
telewizorach i przeglądarkach Firefox/Chrome. Wiele języków ma wbudowane
wsparcie dla SQLite3 (PHP, Python).

Baza to pojedynczy plik z danymi do której dostęp odbywa się za pomocą
biblioteki (nie ma oddzielnego serwera).
Plik danych można kopiować bez konwersji na różne platformy sprzętowe.

Najważniejsze cechy SQLite3:

* [rozległa implementacja SQL][fullsql]
    * widoki, triggery
    * correlated subquery
* całość kodu dystrybuowana w jednym pliku `sqlite3.c`
* Public Domain

# Pomoce

1. [sqlite-utils][sqlite-utils] - komenda (i biblioteka w Pythonie) do
    manipulacji na bazie SQLite3.
2. [SQLiteStudio][sqlitestudio] - GUI, polski autor.


# Regexp Howto

Poniższe instrukcje wyciągnięte z:
https://stackoverflow.com/questions/5071601/how-do-i-use-regex-in-a-sqlite-query

    apt install sqlite3-pcre

...which implements Perl regular expressions in a loadable module
in `/usr/lib/sqlite3/pcre.so`

To be able to use it, you have to load it each time you open the database:

    .load /usr/lib/sqlite3/pcre.so

Or you could put that line into your `~/.sqliterc.`

Now you can query like this:

    SELECT fld FROM tbl WHERE fld REGEXP '\b3\b';
    SELECT db_conn_str FROM passtxt WHERE db_conn_str REGEXP('(SL|LM)\d+');

If you want to query directly from the command-line,
you can use the -cmd switch to load the library before your SQL:

    sqlite3 "$filename" -cmd ".load /usr/lib/sqlite3/pcre.so" "SELECT fld FROM tbl WHERE '\b3\b';"

Another load option:
I created a view with this:
`SELECT load_extension('/usr/lib/sqlite3/pcre.so');`


Python Regexp:

    import sqlite3
    import re

    def match(expr, item):
        return re.match(expr, item) is not None

    conn = sqlite3.connect(':memory:')
    conn.create_function("MATCHES", 2, match)
    cursor = conn.cursor()
    cursor.execute("SELECT MATCHES('^b', 'busy');")
    print cursor.fetchone()[0]

    cursor.close()
    conn.close()



[sqlite]: https://www.sqlite.org/
[fullsql]: https://www.sqlite.org/fullsql.html
[sqlitestudio]: https://sqlitestudio.pl/
[sqlite-utils]: https://sqlite-utils.datasette.io/


