<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-18 15:54:09
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-24 16:17:55
 * @FilePath: /his-doc/docs/guide/issues.md
-->

## 常见问题

这里主要汇集his 产品开发过程中遇到的问题，请大家遇到遇到问题积极反馈，共同维护、改进开发体验

### 子页面缓存问题

在 `his-main` 里默认缓存前n个菜单，也就是说每个子应用都可能被缓存。缓存意味着子应用并不会被真正销毁， 所以在菜单切换回当前子应用时并不会走 `create` `mounted` 等hook,但是会激活`deactivated`、`activated` hook, 如果你有定时器类的需求，需要在`deactivated`、`activated` hook里处理。

```javascript
async mounted () {
  // 组件激活
  this.$on('hook:activated', async () => {
    ...// 其他逻辑
    this.handleAutoTime() // 添加定时器
  })
  // 组件失活时清除定时器
  this.$on('hook:deactivated', () => this.clearTime())
},
```

这一点非常重要
### 组件库样式错乱

如果你的项目使用未升级前的开发方案，可能会遇到这个问题

请打开控制台查看当前winning-componnets版本，必要时请使用his-cli 脚本命令进行升级
```javascript
his update
```

### 部署后访问 404
- 检查是 VUE_APP_SYSTEM_BASE_URL 是不是配置错了
- 检查子应用文件包名是否和接口返回的菜单 URL 一致

### 部署后访问 js 报错
- 检查是子应用是否将 Vue 相关的包 external 了，目前方案是公共依赖包子应用单独打包进代码里，不 external.
- 子应用需要注册 elementUI、 winning-components
