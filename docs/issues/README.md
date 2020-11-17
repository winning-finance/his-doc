# 常见问题

## 组件库样式错乱
请打开控制台查看当前winning-componnets版本，必要时请使用his-cli 脚本命令进行升级

```
his update
```

## 部署后访问 404

- 检查是 VUE_APP_SYSTEM_BASE_URL 是不是配置错了，必须与接口返回名称一致
- 检查子应用文件包名是否和接口返回的菜单 URL 一致

## 部署后访问 js 报错

- 检查是子应用是否将 Vue 相关的包 external 了，目前方案是公共依赖包子应用单独打包进代码里，不 external.
- 子应用需要注册 elementUI
