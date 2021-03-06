test:
	mocha -u tdd
.PHONY: test
build:
	browserify ./index.js -o ./src/phys.js
	uglifyjs -o ./src/phys.min.js ./src/phys.js
docs:
	docco lib/*.js lib/phys/*.js
	docco examples/*.js