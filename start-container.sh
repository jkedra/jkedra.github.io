#!/bin/bash

# temporary container
docker run \
    -p 8080:8080 \
    -p 8081:8081 \
    -v $(pwd):/site \
    --rm \
    -it jkedra/jekyll
