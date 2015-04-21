compile:
	coffee -c -b -w ./
test: 
	npm test
# pack runs if the test suite fails
pack: test
	npm pack

.PHONY: compile, test, pack