# his-request 使用文档

his-request 是一个基于 axois 封装的 request 插件

## 安装

```shell
# his项目一般都是 lerna 管理的
lerna add his-request
```

## 功能点

- 自定义请求配置 （详情请看 [配置说明](#配置说明-config)）
- 响应成功及异常的全局拦截统一处理
- 防止重复请求（取消当前重复的请求）

## 使用

**his-request** 本质上为一个 js 类，核心功能提供了和后端交互的方法，

1、 初始化

```javascript
import Request from 'his-request';

export const request = new Request({
  baseUrl: 'http://172.16.6.213:41200' || '/finance-mdm',
  warning: true, // 默认为 ture （实际可以不写）
  isAddHospitalSoid: false, // 默认为true （这里只是展示）
});

export default request;
```

2、 生成请求

```javascript
/** 本服务计费 */
import request from '...'
export const addOriginService = request.temp(url, {
failTxt: '本服务计费设置添加失败！',  // 非必填，默认取 errorDetail 中的 message
successTxt: '本服务计费设置添加成功！',  //  非必填 需要成功提示时 填写
warning: false, // 关闭默认弹窗
transformData: function (data) {
... // 处理data 的钩子
return data
},
checkFn: function (data) {
... // 可以校验api 入参 是否合法，不合法则取消这次请求
return data
}
})
```

3、页面中调用

```javascript
import { addOriginService } from '...'
addOriginService({
... // 入参
}, {
... // 个性化配置 （非必需，可覆盖之前的配置信息）
}).then(res => {
...
}).catch(err => {

})
```

## 配置说明（config）

考虑同一个 api 在不同的页面有不同的应用场景，his-request 提供了三层配置场景，你可以在`实例化`、`生成请求方法`、`页面方法调用`同时进行配置，
**_后面的配置参数会覆盖之前的配置_**。

| 参数          | 是否必填 | 类型     | 参数说明                                                           |
| :------------ | :------- | :------- | :----------------------------------------------------------------- |
| baseUrl       | 否       | string   | url 统一前缀，不传的话为空字符串 url 统一前缀，不传的话为空字符串  |
| Message       | 否       | function | 统一报错的方法，默认取 element-ui 里的 Message，下个迭代统一定制   |
| warning       | 否       | boolean  | 接口出错时是否提示，默认为 ture                                    |
| transformData | 否       | function | 在请求发出前对入参重新定义的方式，无默认值                         |
| checkFn       | 否       | function | 在请求发出前，对入参进行校验的方法，未通过则取消该请求             |
| checkWarning  | 否       | boolean  | 当提供 checkFn 且 checkFn 未通过时，是否提示错误信息， 默认为 true |

## todo (后续支持)

- 提供 ued 标准的详情错误信息弹窗
- 合并同一时间段 request 的错误提示
- 路由切换取消当前所有 pending 状态的请求
- 单独取消发出的某个请求
