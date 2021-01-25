<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-18 11:24:15
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2021-01-12 20:15:31
 * @FilePath: /his-doc/docs/tool/his-request.md
-->
## his-request 请求
> 基于axois封装的request插件

### 安装

将npm源切换为winning

```bash
npm install his-request -S
```

或者

```bash
yarn add his-request -S
```
### 支持

- 自定义请求配置
- 响应成功及异常的全局拦截统一处理
- 防止重复请求（取消当前重复的请求）
- 提供ued 标准的详情错误信息弹窗
- 支持对同一个URL的同一时间发出的多个请求，后面的覆盖之前的
- 取消当前所有pending状态的请求

### todo (后续支持)

- 根据业务需要扩展功能

### 使用

**his-request**  本质上为一个js类，核心功能提供了生成和后端交互的方法，

1、 初始化

```javascript
import Request from 'his-request'
import { Message } from 'element-ui'

const isProduction = process.env.NODE_ENV === 'production'

export const request = new Request({
  baseUrl: isProduction ? '/finance-mdm' : 'http://172.16.6.201:41200',
  warning: false, // 默认为 ture （是否使用默认错误提示）
  isAddHospitalSoid: false // 默认为true （这里只是展示）
})

export default request
```
2、 生成请求

核心 `temp` 方法返回一个promise对象

```javascript
/** 本服务计费 */
import request from '...'
const { temp } = request
export const addOriginService = temp(url, {
  failTxt: '本服务计费设置添加失败！',
  successTxt: '本服务计费设置添加成功！',
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
	...  // 入参
}, {
	... // 个性化配置 （非必需，可覆盖之前的配置信息）
}).then(res => {
...
}).catch(err => {

})
```

### 静态方法

一. `getCookieData`

该方法获取 `cookie` 信息, 它放回一个`object` 包括 user 、header 信息

```javascript
import Request from 'his-request'
/*
* @return { Object } Cookies
*/
const { user: userInfo, header } = Request.getCookieData()
```

返回数据
```javascript
{
  user: {
    employeeId: // 员工id
    userId: // 用户id
    employeeNo: // 员工号
    employeeName: // 员工姓名
    hospitalSOID: // 医院soid 
    userHospitalSOID: // 员工所属于医院 soid
    orgName: // 员工组织名称
  },
  header: {
    Authorization: '', // BEARER_TOKEN
    'W-FLOW': '', //
    'X-DEBUG': '',
    ip: ''
  }
}
```

二. `getPendingRequestMap`

获取所有pending状态的请求

```javascript
import Request from 'his-request'

/*
* @return { Map } pending 状态的map对象
*/
Request.getPendingRequestMap()
```

三. `clear`

清除所有pending 状态请求

```javascript
import Request from 'his-request'

/*
* @parmas { Array } whiteList 白名单，白名单中的URL 不取消
* @return { Array } 被取消的url列表
*/
Request.clear([url, ...])
```

__建议:__ 
- 可以在 vue 中 destroy 钩子中使用，另外可以使用全局mixin, 只要写在一个地方就可以了
- 在temp方法生成具体request的时候可以配置 global 为 true, 表示为全局请求，将不会被取消


四. `asyncClear`

使用方法同 `clear`, 不过它是一个 promise 对象

__注意:__ 如果你在具体页面中使用 clear, 要使用该方法，由于 axios 中的 request 都是 promise, 根据 JavaScript 解释器的机制， 它为微任务，所以使用 clear 将无法实现效果，必须使用 `asyncClear`

### 配置说明（config）

考虑同一个api在不同的页面有不同的应用场景，**his-request** 提供了三层配置场景，你可以在`初始化`、`生成请求方法`、`页面方法调用`、后面的配置参数会覆盖之前的配置。

|  Param Name  | Required | Description |
|--------|----------|-------------|
| Message   | 否       | 统一报错的方法，默认取winning-componets里Message-Ex的方法 |
| baseUrl   | 否       | url统一前缀，不传的话为空字符串 |
|isAddHospitalSoid   | 否        |是否统一加hospitalSOID, 默认为 true |
|warning| 否| 接口出错时是否提示，默认为ture |
|cover| 否| 是否覆盖上一个pending状态的请求 |
|repeat| 否| 是否允许重复请求 |
|transformData|否| 在请求发出前对入参重新定义的方式，无默认值|
|checkFn| 否| 在请求发出前，对入参进行校验的方法，未通过则取消请求，无默认值|
|checkWarning| 否| 当提供checkFn且checkFn 未通过时，是否提示错误信息， 默认为true|