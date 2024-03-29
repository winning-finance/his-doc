<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-18 13:51:23
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2021-01-28 18:34:46
 * @FilePath: /his-doc/docs/guide/api.md
-->

## API 介绍

这里主要是主应用 `his-main` 提供给子应用的api 使用文档

### 主应用提供的方法和数据

- appSystemId - string 子应用系统ID
- menuId - String 子应用菜单id
- menuName - String 子应用菜单名称
- bussinessUnit - Object 业务操作单元（当前系统的科室、药房、库房等信息）
- microAppEntry - String 子应用entry地址(qiankun)
- microAppName - String 子应用的name(qiankun)
- EventEmit - Function 发布订阅器,用于和主应用消息通信
- getActionSettingValueByConceptId - Function 获取公共设置项value值
- ActionSettingEvent.subscribe - Function 监听设置项的值 change 变化的钩子函数
- actionInject.register - Function 注册退出登陆前需要做的事情

如何使用

### 主应用提供的事件

|  事件名称 | 说明 | 回调参数 |
|--------|----------|-------------|
|  his-main:unit-change:xxxx(当前菜单menuId)  |   业务操作单元 change 事件  | state：当前业务操作单元, 具体值：{orgId: "149360816318121989", orgName: "内四科病区" ,orgNo: "13},prev：更改前的业务操作单元 |

### 一. 子应用获取主应用入参数（调用$root）

示例： 获取公共设置项value值

```javascript
const { getActionSettingValueByConceptId } = this.$root.microAppState
```


### 二. 主应用与子应用通信方式

目前主框架采用EventEmit与子应用相互通信，主应用对外暴露了EventEmit，子应用可接收调用$emit或者$on通信

__1. 不同子应用相互跳转__

事件：
- OPEN_HIS_MENU ： 打开子应用菜单，适用于子页面之间需要跳转的需求

``` javascript
// 第一步，跳转目标页面path 
const url = '/web-adt-outpatient/schedulePlay/'

// 第二步，通过$root获取主应用注入的EventEmit
const { EventEmit } = this.$root.microAppState

// 第三步，规定的打开子菜单的消息类型是OPEN_HIS_MENU,使用EventEmit向主应用发送OPEN_HIS_MENU消息,并发送需要调转的URL
EventEmit.$emit('OPEN_HIS_MENU', url, query?string)
```
参数说明：
- url - String 必须 需要跳转的页面地址
- query - String 可选 其他参数，例如：需要跳转的页面有子路由，需要跳转定位到具体的子路由，则使用此字段

```javascript
EventEmit.$emit('OPEN_HIS_MENU', url, '#/scheduleDetail?tab=0')
```

__开发环境__:
由于开发环境中配置的微应用的entry为http:localhost:xxxx,因此要想在开发环境中查看效果，则需要将URL换成需要跳转的菜单的开发环境入口URL

__2. 隐藏主应用侧边栏、header 等__

```javascript
// 隐藏
EventEmit.$emit('HIDE_HIS_SIDE', true)
// 展示
EventEmit.$emit('HIDE_HIS_SIDE', false)
```

__3. 获取/设置大his页面设置项公共弹窗__

>大his框架下，各子页面的设置项由主应用统一设置，子应用如需获取，需要调用主应用提供的方法  `getActionSettingValueByConceptId`

getActionSettingValueByConceptId默认返回一个promise，如该设置项已经设值，则直接返回value值，如该设置项未设置，则弹出设置项选择弹窗，点击确定弹窗关闭后resolve设置项的value值

__参数说明：__ 调用该函数需要传入具体的设置项的conceptId，具体值请找产品刘春咨询，建议将其值定义常量存于项目中，方便后期修改和调用。目前支持传入String和Array。

<img src="./imgs/action-setting-dialog.png" width="720px"/>

示例：
```javascript
// 从主应用获取接口
const { getActionSettingValueByConceptId } = this.$root.microAppState
/*
* @type { Function }
* @params { String | Array }
* @return { Promise<String | Array> }
*/
const defaultChrgWinId = await getActionSettingValueByConceptId(CHARG_WINDOW_CONCEPT_ID)
```
<br/>

__错误提示__

- 获取操作设置项数据失败，无效的操作设置项概念标识: xxxxxx 此报错说明传入的设置项的概念标识不正确，请联系相关人员获取正确的概念标识。
- 获取设置项值失败 此报错说明没有获取到设置项的value值，可能是后端接口返回异常，此时先联系（胡佳义或者协同域产品）筛查是否是前端原因。

__本地开发__

>由于该功能与菜单menuId强相关，同时本地开发时，menuId 并不是来源于接口，而是 `service.config.js` 配置中的 menu 字段，所以确保本地开发时 service.config.js appMenuId 正确尤为重要

__第一步：__ 找到正确的菜单页面的menuId

在主应用中的菜单接口返回的数据中查找到自己菜单页面的menuId

<img src="./imgs/api-screen-2.jpg" width="720px"/>

如果项目已部署则可直接在213上访问该页面，copy地址栏中的数字字符串即可

<img src="./imgs/api-screen-3.jpg" width="720px"/>

__第二步:__ 将此id替换至service.config.js中配置的该项目的appMenuId

<img src="./imgs/api-screen-1.jpg" width="720px"/>

__注意事项:__ 由于大HIS所有产品都需要在切换菜单（子应用）时 保持页面不刷新，目前实现不刷新的原理是保持子应用`keep-alive`, 那么在菜单切换回当前子应用时并不会走 `create` `mounted` 等hook,但是会激活`deactivated` `activated` hook, 所以像调取公共弹窗这类的逻辑需要考虑到这个问题。

示例：(药师审方)
```javascript
async mounted () {
  // 组件激活
  this.$on('hook:activated', async () => {
    // 如果没有库房信息则重新获取
    if (!this.winId) { 
      await this.getOrgId() 
    }
    this.handleAutoTime() // 添加定时器
  })
  // 组件失活时清除定时器
  this.$on('hook:deactivated', () => this.clearTime())
  try {
    ...
    await this.getOrgId()
    ...
  } catch (e) {
    console.log(e)
    return
  }
  ...
},
// 调取主应用弹窗
async getOrgId () {
  const {
    getActionSettingValueByConceptId
  } = this.$root.microAppState // 从主应用获取接口
  this.winId = await getActionSettingValueByConceptId("399299546") // 调用接口方法获取对应的选项值
  const obj = {
    orgId: this.winId
  }
  Storage.session.set("buType", JSON.stringify(obj))
  this.$store.dispatch("user/getBuType", obj)
}
```

这里在 `activated`、`deactivated` hook里添加的逻辑是为了保证，当切换回当前菜单时如果没有调用过公共类设置，则重新调用，保证产品连贯性。

__3. ActionSettingEvent.subscribe 介绍__

> 在大HIS产品中，一些公共类的弹窗集中管理在主应用中，比如药品相关的药库的选择，门诊收费相关的收费窗口选择。在上面介绍了调取公共弹窗。那么对公共弹窗的逻辑响应则是通过 `ActionSettingEvent.subscribe` 来添加订阅，这样当公共类的设置改变，主应用自动去执行子应用添加的订阅方法帮助子应用执行更新逻辑。

示例：（药师审方部分代码）

<img src="./imgs/subscribe.jpg" width="720px"/>

这里在 mounted 钩子里添加了订阅，并且在beforeDestory 钩子里删除订阅，这一点非常重要

__4. 子应用自定义 退出登录、退出系统（混合框架）、关闭菜单 事件的业务逻辑__

示例代码

```javascript
// 从主应用获取接口
const { actionInject, menuId } = this.$root.microAppState
/**
 * 
 * @param {String} id 菜单id
 * @param {Array | String} actions LOGOUT | QUIT | CLOSE // 动作名称
 * @param {noop} fn  逻辑方法
 * @returns 
 */
// 关闭菜单前询问
actionInject.register.CLOSE(menuId, (done) => {
  this.$confirm('确定关闭菜单吗?', '提示!', {
    type: 'warning'
  }).then(() => {
    // 确定
    done() // 执行 done 逻辑
  }).catch(() => {
    // 否
  })
})

or

actionInject.register(menuId, 'CLOSE', (done) => {
  this.$confirm('确定关闭菜单吗?', '提示!', {
    type: 'warning'
  }).then(() => {
    // 确定
    done() // 执行 done 逻辑
  }).catch(() => {
    // 否
  })
})

```
register方法参数说明

|  参数  | 说明 | 类型 |
|--------|----------|-------------|
| id   | 菜单id       | string |
| actions   | 动作列表 (LOGOUT：退出登录、 QUIT：退出系统（混合框架）、 CLOSE：关闭菜单) 中的一个或多个         | array 或者 string |
| fn | 注册的function, 接收 done 方法, fn(done) ,需要使用箭头函数 | Function |


__5. 当子应用需要 *bussinessUnit*【业务操作单元】，子应用如何响应。__

```javascript
// 初始化取业务操作单于值
const {
  bussinessUnit,
  EventEmit,
  menuId
} = this.$root.microAppState
const start = (bussinessUnit) => {...}
// 监听业务操作单元 change 
EventEmit.$on(`his-main:unit-change:${menuId}`, (state, prev) => {
  start(state)
})
start(bussinessUnit)
```

### 最后

如需新增功能接口或者有bug，请联系胡佳义（工号：7818）
