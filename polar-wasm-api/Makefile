.PHONY: build test

CARGO_FLAGS ?= --dev
build:
	wasm-pack build $(CARGO_FLAGS) --target bundler -d pkg-nodejs
	rm pkg-nodejs/.gitignore pkg-nodejs/package.json
	cp -r pkg-nodejs/. ../languages/js/src
	rm -rf pkg-nodejs

test:
	wasm-pack test --node
