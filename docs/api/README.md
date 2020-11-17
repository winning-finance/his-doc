# 主应用提供的方法

目前主应用给子应用注入了诸多字段及函数。

- menuId - `String` 子应用菜单id

- microAppEntry - `String` 子应用entry地址(qiankun)

- microAppName - `String` 子应用的name(qiankun)

- EventEmit  - `Function` 发布订阅器,用于和主应用消息通信

- getActionSettingValueByConceptId  - `Function` 获取公共设置项value值 

## 如何使用

在子应用中调用$root获取

```js
 const { getActionSettingValueByConceptId } = this.$root.microAppState 
```

## 最后

 如需新增功能接口，请联系本人（强峰）