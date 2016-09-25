#!/bin/bash
# http://jekyllrb.com/docs/github-pages/
# https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll
# gem install bundler
bundle update
#bundle exec jekyll serve --drafts --watch

bundle exec jekyll serve --drafts --incremental --watch \
    --config _config.yml,_config127.yml

#http://localhost:4000

