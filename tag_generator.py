#!/usr/bin/env python3

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

# Skanujemy zarówno posty, jak i wszystkie kolekcje Jekylla z _config.yml
source_dirs = ['_posts/', '_climb/', '_python/', '_tools/', '_outdoor/', '_db/']
tag_dir = 'tag/'

filenames = []
for source_dir in source_dirs:
    for dir_path, _, fnames in os.walk(source_dir):
        for fname in sorted(fnames):
            if fname.endswith(('.md', '.html')):
                filenames.append(os.path.join(dir_path, fname))

total_tags = []
for filename in filenames:
    with open(filename, 'r', encoding='utf-8') as f:
        # Pomijamy pliki bez frontmattera YAML
        first_line = f.readline()
        if first_line.strip() != '---':
            continue
        for line in f:
            stripped = line.strip()
            # Koniec frontmattera YAML
            if stripped in ('---', '...'):
                break
            if ':' not in stripped or stripped.startswith('#'):
                continue
            # Dzielimy tylko po pierwszym ':', żeby dwukropek w wartości nie psuł klucza
            key, tag_value = stripped.split(':', 1)
            if key.strip() == 'tags':
                tag_value = tag_value.strip()
                if not tag_value:
                    # Format 1: lista wieloliniowa YAML ("tags:\n  - foo\n  - bar")
                    for next_line in f:
                        ns = next_line.strip()
                        if ns in ('---', '...'):
                            break
                        if ns.startswith('- '):
                            item = ns[2:].strip().strip('\'"')
                            if item:
                                total_tags.append(item)
                        elif ns and not ns.startswith('#'):
                            break
                elif tag_value.startswith('['):
                    # Format 2: lista inline ("tags: [foo, bar]")
                    clean_tag = tag_value.strip('[]')
                    for t in clean_tag.split(','):
                        t = t.strip().strip('\'"')
                        if t:
                            total_tags.append(t)
                else:
                    # Format 3: tagi rozdzielone spacjami ("tags: foo bar")
                    for t in tag_value.split():
                        t = t.strip().strip('\'"')
                        if t:
                            total_tags.append(t)
                break

total_tags = set(total_tags)

# Usuwamy stare pliki tagów i generujemy cały katalog tag/ od nowa (opcja 6b: b)
old_tags = glob.glob(os.path.join(tag_dir, '*.md'))
for tag in old_tags:
    os.remove(tag)

if not os.path.exists(tag_dir):
    os.makedirs(tag_dir)

created_count = 0
for tag in sorted(total_tags):
    slug = slugify(tag)
    if not slug:
        continue
    tag_filename = os.path.join(tag_dir, slug + '.md')
    with open(tag_filename, 'w', encoding='utf-8') as f:
        write_str = '---\nlayout: tagpage\ntitle: "Tag: ' + tag + '"\ntag: ' + tag + '\nrobots: noindex\n---\n'
        f.write(write_str)
    created_count += 1

print("Tags generated, count:", created_count)
