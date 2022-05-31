(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{396:function(s,e,v){"use strict";v.r(e);var a=v(61),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,v=s._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h2",{attrs:{id:"本地开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地开发"}},[s._v("#")]),s._v(" 本地开发")]),s._v(" "),v("p",[s._v("本节将介绍如何在本地开发调试his项目。")]),s._v(" "),v("h3",{attrs:{id:"问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),v("p",[s._v("在现有方案确定之前，我们的项目基本都是使用 "),v("code",[s._v("vue-cli")]),s._v(" 生成的spa项目，基本是 "),v("code",[s._v("vue")]),s._v(" 项目开发必用，非常完善，配置也很简单。但在确定了使用微前端的解决方案之后，带来了两个概念："),v("code",[s._v("主应用")]),s._v(" 和 "),v("code",[s._v("子应用")]),s._v("，主应用只有一个，大部分时候我们开发的业务模块都是子应用，子应用也是由主应用加载的，那么问题来了：")]),s._v(" "),v("p",[v("strong",[s._v("本地开时如何实现子应用、主应用相结合")])]),s._v(" "),v("h3",{attrs:{id:"方案一"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[s._v("#")]),s._v(" 方案一")]),s._v(" "),v("p",[s._v("npm包方式，目前不推荐使用")]),s._v(" "),v("h4",{attrs:{id:"项目结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[s._v("├── packages                          # 子应用集合\n│   ├── module1                       # 子应用1\n│   │   └── src                       # 子应用源码\n│   │\n│   ├── module2                       # 子应用2\n│   └── ...                           # 其他子应用\n│                \n├── src                               # 子应用之间通用模块\n│   ├── components                    # 通用组件\n│   └── ...                           # 其他通用模块\n├── service.config.js                 # 配置文件\n")])])]),v("p",[s._v("该方案通过 "),v("code",[s._v("lerna")]),s._v(" 将多个子应用集合在一个git仓库中，每个子应用完全独立，都拥有自己都 serve、build 等命令，子应之间公用的模块放在根目录 "),v("strong",[s._v("src")]),s._v(" 文件夹下，默认配置 "),v("strong",[s._v("@@")]),s._v(" 指向该文件夹。")]),s._v(" "),v("p",[s._v("在该方案下，多个子项目就有多个"),v("code",[s._v("serve")]),s._v("命令，所以本地默认会启动多个serve, 那么核心的主应用在哪里呢，在npm包里，没错，"),v("code",[s._v("web-his-main")]),s._v(" 会作为本地开发的依赖被下载，本地开发时默认会启动 web-his-main 的 serve 命令 和 packages 文件夹下所有的 serve 命令。")]),s._v(" "),v("p",[s._v("这样，主项目和子项目都有了，然后通过 service.config.js 中的 menu 配置将子项目项目的入口文件换成 本地子项目  serve 入口，这样就完成了主应用和子应用的结合。")]),s._v(" "),v("h3",{attrs:{id:"方案一升级版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案一升级版"}},[s._v("#")]),s._v(" 方案一升级版")]),s._v(" "),v("p",[s._v("方案一完美的解决了本地开发子应用、主应用相结合的问题。但是随着使用，也存在诸多问题：")]),s._v(" "),v("ul",[v("li",[s._v("为保持 web-his-main 更新，必须频繁同步最新 npm 包")]),s._v(" "),v("li",[s._v("依赖管理比较麻烦，packages 下每个模块都要管理依赖（package.jsons）")]),s._v(" "),v("li",[s._v("最要命的是 lerna 如果使用不规范，在公司CI平台经常有同事构建出错")]),s._v(" "),v("li",[s._v("构建时间较长")]),s._v(" "),v("li",[s._v("本地开发占用内存，起太多服务")]),s._v(" "),v("li",[s._v("项目根目录下src文件无法配置 eslint ,使用lint 自动修复规范问题")])]),s._v(" "),v("p",[s._v("为此，我们改变了")]),s._v(" "),v("ul",[v("li",[s._v("webpack 打包方式，改单入口为多入口")]),s._v(" "),v("li",[s._v("放弃npm包的方式，直接使用代理的方式，代理到线上最新的 his-main")])]),s._v(" "),v("p",[s._v("升级版的核心原理就是这两条")]),s._v(" "),v("h4",{attrs:{id:"项目结构-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目结构-2"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[s._v("├── src                          # 源码\n│   ├── modules                  # 子应用集合\n│   │   ├── m1                   # 子应用1\n│   │   │   ├── components       # 子应用1组件\n│   │   │   ├── main.js          # 子应用1 入口文件，（非常重要）                   \n│   │   │   └── ...              # 子应用1 其他模块\n│   │   └── ...                   # 其他子应用\n│   │\n│   ├── components                       # 通用组件\n│   └── ...                              # 其他通用模块\n│                \n├── public                               # 子应用之间通用模                           \n├── service.config.js                 # 配置文件\n")])])]),v("p",[s._v("该方案改变了构建打包的方式，通过读取 文件 "),v("code",[s._v("src/modules/**/main.js")]),s._v(" 作为 webpack 打包的入口文件，实现了本地单个 serve,就能访问到所有子应用，同时本地之间代理到his-main, 不需要本地再起主应用。")])])}),[],!1,null,null,null);e.default=t.exports}}]);