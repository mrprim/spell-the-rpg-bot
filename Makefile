.PHONY:	clean install start logs

install:
	npm ci

clean:
	rm -rf node_modules
	rm -rf build

build: clean install
	npm run build

start:
	npm run build
	npm start

start-prod: build
	if forever list | grep 'spell-bot'; then forever stop spell-bot; fi
	forever --uid spell-bot start -a -l spell-bot.log -o spell-bot.out.log -e spell-bot.err.log build/index.js

deploy:
	rm -rf deployable
	mkdir deployable
	cp -rf src deployable/src
	cp churchill.js deployable/churchill.js
	cp Makefile deployable/Makefile
	cp ./.babelrc deployable/.babelrc
	cp package.json deployable/package.json
	cp package-lock.json deployable/package-lock.json
	ssh pi@pi "rm -rf ~/server/spell-bot/src"
	scp -r ~/git/spell-the-rpg-bot/deployable/* pi@pi:~/server/spell-bot/
	scp -r ~/git/spell-the-rpg-bot/deployable/.babelrc pi@pi:~/server/spell-bot/
	rm -rf deployable
	ssh pi@pi 'bash -i -c "cd ~/server/spell-bot &&  make start-prod"'

stop-server:
	ssh pi@pi 'bash -i -c "if forever list | grep \'spell-bot\'; then forever stop spell-bot; fi"'

logs:
	ssh pi@pi 'bash -i -c "cd ~/server/spell-bot && npm run logs"'
