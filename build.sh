#!/bin/bash
GO111MODULES=no GOOS=js GOARCH=wasm go build main.go -o main.wasm
