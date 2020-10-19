#!/bin/bash

rm -rf deployable
mkdir deployable
cp -rf src deployable/src
cp -rf scripts deployable/scripts
cp Makefile deployable/Makefile
cp ./.babelrc deployable/.babelrc
cp package.json deployable/package.json
cp package-lock.json deployable/package-lock.json

ssh pi@pi "rm -rf ~/server/spell-bot/src"
ssh pi@pi "rm -rf ~/server/spell-bot/build"
scp -r ~/git/spell-the-rpg-bot/deployable/* pi@pi:~/server/spell-bot/
scp -r ~/git/spell-the-rpg-bot/deployable/.babelrc pi@pi:~/server/spell-bot/
rm -rf deployable

ssh pi@pi 'bash -i -c "cd ~/server/spell-bot && npm run forever"'