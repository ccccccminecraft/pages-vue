# pages-vue

https://ccccccminecraft.github.io/pages-vue/

* pages-vue/ ソースコード
* docs/ ビルドした後のやつ、ホスティングされてるファイル群

## 初回起動時

dockerコンテナをbuild

```shell
docker-compose build
```

## 環境設定

dockerコンテナ立ち上げ

```shell
docker-compose up -d
```

コンテナに入る

```shell
docker exec -it pages_vue_app_1 bash
```

コンテナ内でwebサーバー開始のコマンド実行

```shell
cd ./pages_vue
yarn serve
```

## ビルド

コンテナ内で以下を実行

```shell
yarn build
```
