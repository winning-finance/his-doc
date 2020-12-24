<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-18 13:51:02
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-24 15:52:57
 * @FilePath: /his-doc/docs/guide/config.md
-->

## 配置

这里讲的配置是升级版方案配置

### 配置文件

__路径:__ 项目根目录下 `service.config.js`

__说明:__ 升级版his项目放弃了自定义服务 `wms`, 依然是基于`vue-cli`生态, 它依然是基于 `vue-cli-service` 服务，不过唯一不同的是，它通过插件 `vue-cli-plugin-his` 扩展了 vue-cli-service 服务，给 vue-cli-service 添加了默认的配置，所以你不用添加配置文件 `vue.config.js`, 而是直接使用 `service.config.js`,它的配置也是非常简单。

package.json 文件

 ```json
 ...
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
 ...
 "devDependencies": {
    "vue-cli-plugin-his": "xxx",
    ...
  },
 ```

### service.config.js

`service.config.js` 是his项目的配置文件，它是必需的，它会被插件`vue-cli-plugin-his` 自动加载、处理后给 `@vue/cli-service` 使用。

这个文件导出一个包含了选项的对象

```javascript
module.exports = {
  vueConfig: { // 所有 vue.config.js 的配置都支持
    ...
  },
  cookiePluginOptions: { // 自动登陆配置，非必填，默认登陆 201
    ...
  },
  menu: { // 菜单配置，模拟菜单接口数据，必填
    appSystemId: '4303253901',
    appMenuName: '患者管理',
    appMenuList: [
      {
        name: 'welcome',
        appMenuCode: '399203507',
        appMenuId: '106667170654810113',
        appMenuRelativeUri: '/welcome/',
        appMenuName: '欢迎-his-app',
        appMenuList: [],
        appMenuTypeCode: '256053'
      },
      ...
    ]
  }
}
```

是的，它只有三个选项

- `vueConfig`

所有 [vue-cli 的选项](https://cli.vuejs.org/zh/guide/) 都支持

所以你需要像 `vue.config.js` 一样配置你的代理和其他特殊的需求

- cookiePluginOptions

自动登陆配置， 它不是必需的

默认配置为, 你可以根据需要覆盖

```javascript
cookiePluginOptions: {
  userInfoParams: {
    loginURL: '/base/api/v1/base/user/login',
    userInfoURL: '/base/api/v1/base/user/get_information',
    username: 'L10044',
    password: '456'
  },
  extraCookies: {
    'W-FLOW': 'canary',
    'W-SEQ': 21,
    'X-DEBUG': 'hybrid'
  }
}
```

- menu

menu 配置非常重要，它是本地开发子应用的入口文件，

按照模版的格式在 `appMenuList` 里新增就可以了 

```javascript
menu: { // 菜单配置，模拟菜单接口数据，必填
  appSystemId: '4303253901',
  appMenuName: '患者管理',
  appMenuList: [
    {
      name: 'welcome',
      appMenuCode: '399203507',
      appMenuId: '106667170654810113',
      appMenuRelativeUri: '/welcome/',
      appMenuName: '欢迎-his-app',
      appMenuList: [],
      appMenuTypeCode: '256053'
    },
    ...
  ]
}
```
### 命令行

his项目的命令现在包括 三 个，`serve`、`build`、 `lint`

其他辅助的命令行配置请看 [插件 vue-cli-plugin-his](/tool/vue-cli-plugin-his.html)
