#!/usr/bin/env python

import os

walk_dir = "_posts"

for dir_path, _, fnames in os.walk(walk_dir):
    for fname in fnames:
        if fname.endswith('.md'):
            print('/'.join([dir_path, fname]))




