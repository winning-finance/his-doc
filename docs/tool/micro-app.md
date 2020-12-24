<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-24 16:30:22
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-24 16:38:36
 * @FilePath: /his-doc/docs/tool/mico-app.md
-->

## @winning/micro-app

统一处理、导出、乾坤规范的子应用入口文件

### 使用

```javascript
import MicroApp from '@winning/micro-app'

export * from '@winning/micro-app'

Vue.use(MicroApp, {
  // router,
  store,
  render: h => h(App),
  bootstrap: (props) => {
    // eslint-disable-next-line
    console.log('bootstrap')
  },
  mount: (props) => { },
  unmount: (props) => { }
})
```
