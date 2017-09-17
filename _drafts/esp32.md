---
layout: post
title:  "ESP32"
author: jkedra
date: 2017-09-15 20:00
language: pl

jquery: true
jss: [wikipize]

tags: electronics
categories: esp32 
---

    screen /dev/ttyUSB0 115200

## MicroPython

Documentation for [ESP's MicroPython][MPESP].

### Set up

    pip install esptool
    pip install adafruit-ampy

### Flashing
    esptool.py erase_flash
    esptool.py --chip esp32 write_flash -z 0x1000 ~/Downloads/esp32-20170914-v1.9.2-270-g14fb53e0.bin

### Using

        >>>
        PYB: soft reboot
        OSError: [Errno 2] ENOENT
        MicroPython v1.9.2-270-g14fb53e0 on 2017-09-14; ESP32 module with ESP32
        Type "help()" for more information.
        >>> dir()
        ['uos', 'gc', '__name__', 'bdev']
        >>> uos.
        __name__        uname           urandom         ilistdir
        listdir         mkdir           rmdir           chdir
        getcwd          remove          rename          stat
        statvfs         mount           umount          VfsFat
        >>> uos.uname()
        (sysname='esp32', nodename='esp32', release='1.9.2', version='v1.9.2-270-g14fb53e0 on 2017-09-14', machine='ESP32 module with ESP32')
        >>> uos.listdir()
        ['boot.py']
        >>> uos.getcwd()
        '/'
        >>> open('boot.py').read()
        '# This file is executed on every boot (including wake-boot from deepsleep)\n'
        >>> 

### Programming

    ampy -p /dev/ttyUSB0 put main.py 

## Links

### ESP General

1. [ESP IoT Development Framework](http://esp-idf.readthedocs.io/en/latest/)
2. [Espressif Systems Github](https://github.com/espressif/)
3. [ESP32.neet](http://esp32.net/)
4. [Kolbans book on ESP32](https://leanpub.com/kolban-ESP32)

### MicroPython

1. [MicroPython Project](https://github.com/micropython/)
2. [Docs](http://docs.micropython.org)
3. [MicroPython ESP Docs][MPESP]


[MPESP]: http://docs.micropython.org/en/latest/esp8266/index.html
