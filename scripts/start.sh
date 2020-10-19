#!/bin/bash

for i in "$@"
do
case $i in
    -p)
    PROD="true"
    ;;
    *)
    ;;
esac
done

if [ "$PROD" == "true" ]; then
  npm ci
  babel ./src -d ./build

  if forever list | grep 'spell-bot'; then forever stop spell-bot; fi
  forever --uid spell-bot start -a build/index.js
else
  babel ./src -d ./build
  node ./build/index.js
fi