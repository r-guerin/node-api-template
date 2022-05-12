#!/usr/bin/env bash

LAST_BUILT_FILE_PATH="dist/server/index.js"

yarn clean
yarn build -w &

wait-on "$LAST_BUILT_FILE_PATH" && nodemon --watch dist dist
