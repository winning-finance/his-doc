<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-18 13:34:30
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-24 16:11:57
 * @FilePath: /his-doc/docs/tool/vue-cli-plugin-his.md
-->
## vue-cli 插件

本节主要介绍插件 `vue-cli-plugin-his` ，该插件主要功能是扩展 vue-cli-service serve 命令的功能， 升级版本地开发、调试、构建的实现就是此插件。

### serve 命令扩展 options

- --local 本地模式

该模式会使用本地 `vue`、 `element-ui`、 `winning-components`, 不依赖 `his-main `方便调试

使用
```javascript
yarn serve --local
```

- --skip

vue-cli-plugin-his 默认提供了自动登陆功能、你可以选择跳过

```javascript
yarn serve --skip login
```

vue-cli-plugin-his 默认提供了环境选择功能 在服务启动之前会让你 选择 201、192、195 环境，如果你觉得没必要，可以选择跳过

```javascript
yarn serve --skip env
```

同时跳过 自动登陆 和 环境选择

```javascript
yarn serve --skip envlogin
```