#!/usr/bin/env bash

yarn clean
swc \
  --out-dir dist \
  --ignore **/*.test.ts \
  ./src \
  "$@"
