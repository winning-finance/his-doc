
配置文件路径：项目根目录下新建service.config.js

**options**

- `build`
- `menu` 开发模式下，配置的子应用数据，用于显示菜单
- `startMenuIds` 默认启动的子应用 id，只作用于开放环境
- `proxy` 代理设置
- `cookiePluginOptions` 自动登陆插件（支持配置 seq）

## build

| 参数     | 说明               | 类型   | 可选值 | 默认值   |
| :------- | :----------------- | :----- | :----- | -------- |
| packages | 子应用父级包名     | string | -      | packages |
| dist     | 同 webpack 的 dist | string | -      | dist     |

## menu

menu 配置只为开发模式服务，跟生产环境无关，生产环境统一走接口。
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------- | :----------------- | :----- | :----- | -------- |
| appSystemId | 系统 id（暂时没用） | string | - | - |
| appSystemName | 系统名称(暂时没用) | string | - | - |
| appSystemRelativeUri | 暂时没用 | string | - | - |
| appMenuList | 系统菜单列表 | array | - | - |

### menu.appMenuList

menu 配置只为开发模式服务，跟生产环境无关，生产环境统一走接口。
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------- | :----------------- | :----- | :----- | -------- |
| name | 项目英文名（与子应用文件夹名相同 ） | string | - | - |
| appMenuId | 菜单的唯一标识（必须唯一） | string | - | - |
| appMenuName | 显示的菜单名称 | string | - | - |
| appMenuRelativeUri | 暂时没用 | string | - | - |
| devEntry | 子应用访问地址 | string | - | - |

## startMenuIds

配置默认启动的子应用。
类型：`Array<appMenuId> | null`，子应用（菜单）唯一标识 appMenuId。
不传此字段时时，系统默认启动项目中 packages 下所有文件夹下的子应用，根据子应用个数配置，可减少编译时间。

## proxy

配置系统接口代理，与 webpack-dev-server 的 proxy 一致。在项目根目录 vue.config.js 中配置亦可。

## cookiePluginOptions

| 参数           | 说&nbsp;明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 类型   | 可选值 | 默认值                                                                                                                                                                                                        |
| :------------- | :--------------------------------------------------------------------------------- | :----- | :----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userInfoParams | 自动登陆配置，包括<br><br>1.登陆接口 url <br><br>2.账号、密码                      | object | -      | userInfoParams: {<br>loginURL: 'http://172.16.6.213/base/api/v1/base/user/login',<br>userInfoURL: 'http://172.16.6.213/base/api/v1/base/user/get_information',<br>username: 'L10044',<br>password: '456'<br>} |
| extraCookies   | 开发是金丝雀参数配置                                                               | object | -      | -                                                                                                                                                                                                             |
