# winning-micro-app-service 使用文档

winning-micro-app-service 是服务于大his框架下的脚手架插件，用于打包、构建、本地开发

## 安装

```shell
yarn add winning-micro-app-service
```

## 使用
1、在项目根目录的packa.json中添加脚本命令

2、填写脚本值为 `wms [script]`

```js
 "serve": "wms remote-serve"
```


## script命令
### serve
本地开发使用，启动项目。使用his-main的本地npm包

### remote-serve （推荐使用）
本地开发使用，启动项目 。使用线上的his-main包，其环境都是最新的包括组件库，故此在组件库频繁升级的情况下，不用更新项目中的npm包即可使用最新环境。

### build 
构建生产包
