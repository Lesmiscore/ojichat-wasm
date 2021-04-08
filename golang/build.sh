#!/bin/bash
set -xe
GO111MODULES=no GOOS=js GOARCH=wasm go build -o main.wasm main.go
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
