#!/bin/bash
# http://jekyllrb.com/docs/github-pages/
# https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll
# gem install jekyll bundler

if [ $(hostname) == 'ubuntu20' ]; then
    echo Hello ubuntu20
    #export https_proxy=http://127.0.0.1:3128/
fi
#bundle update
#bundle exec jekyll serve --drafts --watch

# Settings in later files override settings in earlier files.
bundle exec jekyll serve --drafts --incremental --watch \
    --config _config.yml,_config127.yml \
    --future --unpublished \
    --livereload --open-url

#http://localhost:4000

