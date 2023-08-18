#!/usr/bin/env python

'''
tag_generator.py

Copyright 2017 Long Qian
Contact: lqian8@jhu.edu

Changes: jurek.kedra@gmail.com

This script creates tags for your Jekyll blog hosted by Github page.

plugins:
pip install python-slugify
'''

import glob
import os
from slugify import slugify

post_dir = '_posts/'
draft_dir = '_drafts/'
tag_dir = 'tag/'

#filenames = glob.glob(post_dir + '*md')
#filenames = filenames + glob.glob(draft_dir + '*md')

filenames = []
for dir_path, _, fnames in os.walk(post_dir):
    for fname in fnames:
        if fname.endswith('.md'):
            filenames.append('/'.join([dir_path, fname]))

total_tags = []
for filename in filenames:
    f = open(filename, 'r', encoding='utf8')
    crawl = False
    for line in f:
        if crawl:
            current_tags = line.strip().split(':')
            if current_tags[0] == 'tags':
                tag_value = current_tags[1]
                if (tag_value.strip().startswith('[')):
                    clean_tag = ''.join(c for c in tag_value if c not in '[]')
                    list_tags = map(str.strip, clean_tag.split(','))
                    total_tags.extend(list_tags)
                else:
                    list_tags = map(str.strip, tag_value.strip().split())
                    total_tags.extend(list_tags)
                crawl = False
                break
        if line.strip() == '---':
            if not crawl:
                crawl = True
            else:
                crawl = False
                break
    f.close()
total_tags = set(total_tags)

old_tags = glob.glob(tag_dir + '*.md')
for tag in old_tags:
    os.remove(tag)
    
if not os.path.exists(tag_dir):
    os.makedirs(tag_dir)

for tag in total_tags:
    tag_filename = tag_dir + slugify(tag) + '.md'
    f = open(tag_filename, 'a')
    write_str = '---\nlayout: tagpage\ntitle: \"Tag: ' + tag + '\"\ntag: ' + tag + '\nrobots: noindex\n---\n'
    f.write(write_str)
    f.close()
print("Tags generated, count", total_tags.__len__())
