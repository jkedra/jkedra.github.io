#!/bin/bash

docker run \
    -p 8080:8080 \
    -p 8081:8081 \
    -v $(pwd):/site \
    -it --entrypoint bash bretfisher/jekyll
