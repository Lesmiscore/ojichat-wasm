#!/bin/bash
GO111MODULES=no GOOS=js GOARCH=wasm go build -o main.wasm main.go
