update:
	cd enzyme && git pull

build: update
	cd enzyme && npm install && npm run build
