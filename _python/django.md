---
layout: post
title:  Django
author: jkedra
lang: en
tags: django flask
---

# Tutorial

## Installing Django

* [Part 1](https://www.youtube.com/watch?v=oT1A1KKf0SI) (VirtualEnv)
* [Part 2](https://www.youtube.com/watch?v=EcY1HBK9hf4)
* [Part 3](https://www.youtube.com/watch?v=zTNA0MtZwso)
* [Part 4](https://docs.djangoproject.com/en/1.8/intro/tutorial01/)


## Useful Commands

    pip install django
    djano-admin startproject stortime
    cd storytime
        settings.py - project config
        manage.py   - command runner
        urls.py     - urls to configure
                      starting project   
    ./manage.py runserver
    ./manage.py migrate
    ./manage.py startapp story

## Migrations

1. Change your models (in models.py).
2. Run `manage.py makemigrations` to create migrations for those changes
3. Run `manage.py migrate` to apply those changes to the database.

# Testing

* [Testing in Django](https://realpython.com/blog/python/testing-in-django-part-1-best-practices-and-examples/)


# Flask

* [File uploads in Flask](http://flask.pocoo.org/docs/0.12/patterns/fileuploads/)
* [Flask Uploads](https://pythonhosted.org/Flask-Uploads/)

# Resources

* [django and AWS S3](https://www.caktusgroup.com/blog/2014/11/10/Using-Amazon-S3-to-store-your-Django-sites-static-and-media-files/)
* [Django Breadcrumbs][djbreadcrumbs]
* [select2][Select2] is jQuery replacement for select boxes.
    Nicely integrated with django.
* [Django Debug Toolbar][debug-toolbar]: a must!
* [Django Book](http://djangobook.com/)


[djbreadcrumbs]: https://django-bootstrap-breadcrumbs.readthedocs.org/en/latest/
[select2]: https://github.com/select2/select2
[debug-toolbar]: https://github.com/django-debug-toolbar/django-debug-toolbar


