(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{354:function(t,s,a){t.exports=a.p+"assets/img/action-setting-dialog.a560c473.png"},355:function(t,s,a){t.exports=a.p+"assets/img/api-screen-2.bd6d2091.jpg"},356:function(t,s,a){t.exports=a.p+"assets/img/api-screen-3.e56df14f.jpg"},357:function(t,s,a){t.exports=a.p+"assets/img/api-screen-1.e5882f24.jpg"},358:function(t,s,a){t.exports=a.p+"assets/img/subscribe.db17cfd5.jpg"},372:function(t,s,a){"use strict";a.r(s);var n=a(53),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"api-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-介绍"}},[t._v("#")]),t._v(" API 介绍")]),t._v(" "),n("p",[t._v("这里主要是主应用 "),n("code",[t._v("his-main")]),t._v(" 提供给子应用的api 使用文档")]),t._v(" "),n("h3",{attrs:{id:"主应用提供的方法和数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主应用提供的方法和数据"}},[t._v("#")]),t._v(" 主应用提供的方法和数据")]),t._v(" "),n("ul",[n("li",[t._v("appSystemId - string 子应用系统ID")]),t._v(" "),n("li",[t._v("menuId - String 子应用菜单id")]),t._v(" "),n("li",[t._v("bussinessUnit - Object 业务操作单元（当前系统的科室、药房、库房等信息）")]),t._v(" "),n("li",[t._v("microAppEntry - String 子应用entry地址(qiankun)")]),t._v(" "),n("li",[t._v("microAppName - String 子应用的name(qiankun)")]),t._v(" "),n("li",[t._v("EventEmit - Function 发布订阅器,用于和主应用消息通信")]),t._v(" "),n("li",[t._v("getActionSettingValueByConceptId - Function 获取公共设置项value值")]),t._v(" "),n("li",[t._v("ActionSettingEvent.subscribe - Function 监听设置项的值 change 变化的钩子函数")]),t._v(" "),n("li",[t._v("actionInject.register - Function 注册退出登陆前需要做的事情")])]),t._v(" "),n("p",[t._v("如何使用")]),t._v(" "),n("h3",{attrs:{id:"主应用提供的事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主应用提供的事件"}},[t._v("#")]),t._v(" 主应用提供的事件")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("his-main:unit-change:xxxx(当前菜单menuId)")]),t._v(" "),n("td",[t._v("业务操作单元 change 事件")]),t._v(" "),n("td",[t._v('state：当前业务操作单元, 具体值：{orgId: "149360816318121989", orgName: "内四科病区" ,orgNo: "13},prev：更改前的业务操作单元')])])])]),t._v(" "),n("h3",{attrs:{id:"一-子应用获取主应用入参数-调用-root"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-子应用获取主应用入参数-调用-root"}},[t._v("#")]),t._v(" 一. 子应用获取主应用入参数（调用$root）")]),t._v(" "),n("p",[t._v("示例： 获取公共设置项value值")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getActionSettingValueByConceptId "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microAppState\n")])])]),n("h3",{attrs:{id:"二-主应用与子应用通信方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-主应用与子应用通信方式"}},[t._v("#")]),t._v(" 二. 主应用与子应用通信方式")]),t._v(" "),n("p",[t._v("目前主框架采用EventEmit与子应用相互通信，主应用对外暴露了EventEmit，子应用可接收调用$emit或者$on通信")]),t._v(" "),n("p",[n("strong",[t._v("1. 不同子应用相互跳转")])]),t._v(" "),n("p",[t._v("事件：")]),t._v(" "),n("ul",[n("li",[t._v("OPEN_HIS_MENU ： 打开子应用菜单，适用于子页面之间需要跳转的需求")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一步，跳转目标页面path ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/web-adt-outpatient/schedulePlay/'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二步，通过$root获取主应用注入的EventEmit")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" EventEmit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microAppState\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三步，规定的打开子菜单的消息类型是OPEN_HIS_MENU,使用EventEmit向主应用发送OPEN_HIS_MENU消息,并发送需要调转的URL")]),t._v("\nEventEmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPEN_HIS_MENU'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("参数说明：")]),t._v(" "),n("ul",[n("li",[t._v("url - String 必须 需要跳转的页面地址")]),t._v(" "),n("li",[t._v("query - String 可选 其他参数，例如：需要跳转的页面有子路由，需要跳转定位到具体的子路由，则使用此字段")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("EventEmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPEN_HIS_MENU'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#/scheduleDetail?tab=0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("开发环境")]),t._v(":\n由于开发环境中配置的微应用的entry为http:localhost:xxxx,因此要想在开发环境中查看效果，则需要将URL换成需要跳转的菜单的开发环境入口URL")]),t._v(" "),n("p",[n("strong",[t._v("2. 获取/设置大his页面设置项公共弹窗")])]),t._v(" "),n("blockquote",[n("p",[t._v("大his框架下，各子页面的设置项由主应用统一设置，子应用如需获取，需要调用主应用提供的方法  "),n("code",[t._v("getActionSettingValueByConceptId")])])]),t._v(" "),n("p",[t._v("getActionSettingValueByConceptId默认返回一个promise，如该设置项已经设值，则直接返回value值，如该设置项未设置，则弹出设置项选择弹窗，点击确定弹窗关闭后resolve设置项的value值")]),t._v(" "),n("p",[n("strong",[t._v("参数说明：")]),t._v(" 调用该函数需要传入具体的设置项的conceptId，具体值请找产品刘春咨询，建议将其值定义常量存于项目中，方便后期修改和调用。目前支持传入String和Array。")]),t._v(" "),n("img",{attrs:{src:a(354),width:"720px"}}),t._v(" "),n("p",[t._v("示例：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从主应用获取接口")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getActionSettingValueByConceptId "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microAppState\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* @type { Function }\n* @params { String | Array }\n* @return { Promise<String | Array> }\n*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultChrgWinId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActionSettingValueByConceptId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHARG_WINDOW_CONCEPT_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("br"),t._v(" "),n("p",[n("strong",[t._v("错误提示")])]),t._v(" "),n("ul",[n("li",[t._v("获取操作设置项数据失败，无效的操作设置项概念标识: xxxxxx 此报错说明传入的设置项的概念标识不正确，请联系相关人员获取正确的概念标识。")]),t._v(" "),n("li",[t._v("获取设置项值失败 此报错说明没有获取到设置项的value值，可能是后端接口返回异常，此时先联系（胡佳义或者协同域产品）筛查是否是前端原因。")])]),t._v(" "),n("p",[n("strong",[t._v("本地开发")])]),t._v(" "),n("blockquote",[n("p",[t._v("由于该功能与菜单menuId强相关，同时本地开发时，menuId 并不是来源于接口，而是 "),n("code",[t._v("service.config.js")]),t._v(" 配置中的 menu 字段，所以确保本地开发时 service.config.js appMenuId 正确尤为重要")])]),t._v(" "),n("p",[n("strong",[t._v("第一步：")]),t._v(" 找到正确的菜单页面的menuId")]),t._v(" "),n("p",[t._v("在主应用中的菜单接口返回的数据中查找到自己菜单页面的menuId")]),t._v(" "),n("img",{attrs:{src:a(355),width:"720px"}}),t._v(" "),n("p",[t._v("如果项目已部署则可直接在213上访问该页面，copy地址栏中的数字字符串即可")]),t._v(" "),n("img",{attrs:{src:a(356),width:"720px"}}),t._v(" "),n("p",[n("strong",[t._v("第二步:")]),t._v(" 将此id替换至service.config.js中配置的该项目的appMenuId")]),t._v(" "),n("img",{attrs:{src:a(357),width:"720px"}}),t._v(" "),n("p",[n("strong",[t._v("注意事项:")]),t._v(" 由于大HIS所有产品都需要在切换菜单（子应用）时 保持页面不刷新，目前实现不刷新的原理是保持子应用"),n("code",[t._v("keep-alive")]),t._v(", 那么在菜单切换回当前子应用时并不会走 "),n("code",[t._v("create")]),t._v(" "),n("code",[t._v("mounted")]),t._v(" 等hook,但是会激活"),n("code",[t._v("deactivated")]),t._v(" "),n("code",[t._v("activated")]),t._v(" hook, 所以像调取公共弹窗这类的逻辑需要考虑到这个问题。")]),t._v(" "),n("p",[t._v("示例：(药师审方)")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件激活")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hook:activated'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没有库房信息则重新获取")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrgId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleAutoTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加定时器")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件失活时清除定时器")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hook:deactivated'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrgId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调取主应用弹窗")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrgId")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    getActionSettingValueByConceptId\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microAppState "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从主应用获取接口")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActionSettingValueByConceptId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"399299546"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用接口方法获取对应的选项值")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("orgId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("winId\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  Storage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user/getBuType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里在 "),n("code",[t._v("activated")]),t._v("、"),n("code",[t._v("deactivated")]),t._v(" hook里添加的逻辑是为了保证，当切换回当前菜单时如果没有调用过公共类设置，则重新调用，保证产品连贯性。")]),t._v(" "),n("p",[n("strong",[t._v("3. ActionSettingEvent.subscribe 介绍")])]),t._v(" "),n("blockquote",[n("p",[t._v("在大HIS产品中，一些公共类的弹窗集中管理在主应用中，比如药品相关的药库的选择，门诊收费相关的收费窗口选择。在上面介绍了调取公共弹窗。那么对公共弹窗的逻辑响应则是通过 "),n("code",[t._v("ActionSettingEvent.subscribe")]),t._v(" 来添加订阅，这样当公共类的设置改变，主应用自动去执行子应用添加的订阅方法帮助子应用执行更新逻辑。")])]),t._v(" "),n("p",[t._v("示例：（药师审方部分代码）")]),t._v(" "),n("img",{attrs:{src:a(358),width:"720px"}}),t._v(" "),n("p",[t._v("这里在 mounted 钩子里添加了订阅，并且在beforeDestory 钩子里删除订阅，这一点非常重要")]),t._v(" "),n("p",[n("strong",[t._v("4. 退出登陆前，在页面做业务逻辑")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从主应用获取接口")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" actionInject "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microAppState\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n* @type { Function }\n* @params { String } id 菜单id\n* @params { Promise} promiseObj 做业务逻辑的promise 对象\n*/")]),t._v("\nactionInject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" promiseObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("__5. 当子应用需要 "),n("em",[t._v("bussinessUnit")]),t._v("【业务操作单元】，子应用如何响应。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化取业务操作单于值")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bussinessUnit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EventEmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  menuId\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microAppState\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("bussinessUnit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听业务操作单元 change ")]),t._v("\nEventEmit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("his-main:unit-change:")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("menuId"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bussinessUnit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),n("p",[t._v("如需新增功能接口或者有bug，请联系胡佳义（工号：7818）")])])}),[],!1,null,null,null);s.default=e.exports}}]);