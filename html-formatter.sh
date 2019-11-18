#!/bin/bash

if ! which html-beautify >/dev/null; then
  echo "This uses html-beautify, which you don't seem to have." 1>&2
  echo "You can install it via:" 1>&2
  echo "  sudo npm install -g js-beautify" 1>&2
  exit 1
fi

html-beautify -r $(find -name '*-respec.html')
echo "All respec HTML formatted with html-beautify." 1>&2
