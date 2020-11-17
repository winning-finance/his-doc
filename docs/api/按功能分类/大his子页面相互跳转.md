### 不同子应用路由相互跳转

项目中存在不同页面之间路由跳转的需求，故此主应用提供了相关方法。

#### step1
询问需要跳转的页面的Nginx物理地址（即该子应用vue.config.js中的publicPath值）
```js
const url = '/web-adt-outpatient/schedulePlay/'
```

#### step2
通过$root获取主应用注入的EventEmit

```js
const { EventEmit } = this.$root.microAppState
```

#### step3
规定的打开子菜单的消息类型是`OPEN_HIS_MENU`,使用EventEmit向主应用发送`OPEN_HIS_MENU`消息,并发送需要调转的URL
```js
EventEmit.$emit('OPEN_HIS_MENU', url, query?string)
```

#### 参数说明

- url - `String` 必须 需要跳转的页面地址

- query - `String` 可选 其他参数，例如：需要跳转的页面有子路由，需要跳转定位到具体的子路由，则使用此字段 
```js
EventEmit.$emit('OPEN_HIS_MENU', url, '#/scheduleDetail?tab=0')
```
