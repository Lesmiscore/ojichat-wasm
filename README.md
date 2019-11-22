![ojichat in WASM](https://github.com/nao20010128nao/ojichat-wasm/raw/master/images/screenshot.png)
※動作風景は変わることがあります

# なんだよこれ
[ojichat](https://github.com/greymd/ojichat)をWASMにしてWeb上で動くようにしました。    
[今すぐなりきるにはここから。](https://nao20010128nao.github.io/ojichat-wasm/)

# 開発環境

```
$ go version
go version go1.13.4 linux/amd64
$ node -v
v12.6.0
$ npm -v
6.12.1
```

# セットアップ

```
$ npm i
...たくさん出る...
$ go get github.com/greymd/ojichat/generator
```

# ビルド
Go 1.12以降を使ってください。

```
## 全部ビルド
$ npm run build

## Go部分だけ
$ npm run gobuild

## Javascript/HTML部分だけ
$ npm run webbuild
```

# ライセンス
MIT
