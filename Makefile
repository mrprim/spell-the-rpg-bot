.PHONY:	clean install start

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

# start-prod: build
# 	forever stopall
# 	forever start -a -l fc.log -o fc.out.log -e fc.err.log build/index.js

# deploy:
# 	rm -rf deployable
# 	mkdir deployable
# 	cp -rf src deployable/src
# 	cp Makefile deployable/Makefile
# 	cp package.json deployable/package.json
# 	cp package-lock.json deployable/package-lock.json
# 	ssh pi@pi "rm -rf ~/server/friend-computer-discord-app/src"
# 	scp -r ~/git/friend-computer-discord-app/deployable/* pi@pi:~/server/friend-computer-discord-app/
# 	rm -rf deployable
# 	ssh pi@pi 'bash -i -c "cd ~/server/friend-computer-discord-app &&  make start-prod"'

stop-server:
	ssh pi@pi 'bash -i -c "forever stopall"'
