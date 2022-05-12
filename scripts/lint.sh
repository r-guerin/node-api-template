#!/usr/bin/env bash

eslint \
  --ext .js,.ts,.jsx,.tsx \
  --no-error-on-unmatched-pattern \
  --max-warnings=0 \
  ./src \
  "${@}"
