## hot-key 热键方案

### 说明

该方案是为了方便 his 开发者便捷的进行快捷键的添加而设计的一套方案。基于 vue 的自定义指令，便于在任何地方添加。

### 使用

```html
<!-- 基础使用 -->
<el-button
  v-win-hotkey:[{eventName:`openInpatSettlement`}]="onClick"
  size="mini"
>
  {{ buttonTxt }}
</el-button>

<!-- 允许在元素不在页面上时生效 -->
<el-button
  v-win-hotkey:[{eventName:`openInpatSettlement`}].always="onClick"
  size="mini"
>
  {{ buttonTxt }}
</el-button>

<!-- 遍历配置 -->
<el-button
  v-win-hotkey:[{eventName:`openInpatSettlement`,tipPopper:true,toolTipOptions:{placement:`bottom`,effect:`dark`}}]="
        onClick
      "
  size="mini"
>
  {{ buttonTxt }}
</el-button>
```

<!-- 注册插件 -->

```javascript
// 注册插件
Vue.use(WinHotKey)
router.afterEach(() => {
  window.document.dispatch(
    new CustomEvent('win_hot_key_query_params_change_event', {
      detail: {
        appSystemCode: this.appSystemCode,
        appMenuCode: this.appMenuCode
      }
    })
  )
})
```

> :warning: 默认情况下，在指令所在的元素不存在与 dom 上时，快捷键的调用将不会生效，如需生效，请添加 always

> :warning: 快捷键会通过查询元素上是否有 disabled 属性并且值为 disabled 判断不触发，不过仍建议自己在回调函数中处理 disabled 逻辑

### 参数说明

#### 插件注册参数（Vue.use）

| 参数名        | 类型    | 说明                                | 默认值 |
| ------------- | ------- | ----------------------------------- | ------ |
| forcedInstall | boolean | 是否强制进行安装,可以覆盖以前的安装 | false  |

#### 中括号([])内的参数

| 参数名         | 说明                                                                                                      | 默认值                            |
| -------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------- |
| eventName      | 用于表明当前快捷键的事件名称                                                                              | —                                 |
| args           | 用于给快捷键触发的函数传递的参数                                                                          | —                                 |
| always         | 默认情况下，在组件没有销毁时，但指令注册的元素不在 dom 上时，快捷键将不会触发。添加该参数，将会保持触发。 | false                             |
| showTip        | 是否显示快捷键提示                                                                                        | button 默认为 true，其他为 fale   |
| tipPopper      | 提示是否是弹出形式                                                                                        | false                             |
| toolTipOptions | 弹出的提示选项                                                                                            | {placement:'right',effect:'dark'} |
| disRegister    | 不注册，供可能有些按钮组需要遍历使用                                                                      | false                             |

##### toolTipOptions

| 参数名    | 说明       | 默认值 | 可选值                                                                                                    |
| --------- | ---------- | ------ | --------------------------------------------------------------------------------------------------------- |
| placement | 浮窗的方向 | right  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |
| effect    | 样式       | dark   | dark \| light                                                                                             |

#### 通过.添加的参数

| 参数名 | 说明                                                                                                      | 默认值 |
| ------ | --------------------------------------------------------------------------------------------------------- | ------ |
| always | 默认情况下，在组件没有销毁时，但指令注册的元素不在 dom 上时，快捷键将不会触发。添加该参数，将会保持触发。 | —      |

#### 等号后面的参数

| 参数名 | 说明                                        | 默认值 |
| ------ | ------------------------------------------- | ------ |
| —      | 快捷键触发将会调用的 vue 组件的 method 函数 | —      |

### 事件

当当前可用事件数据更改时，将发送 win_hot_key_cur_data_change_event 事件

```javascript
import { HOT_KEY_CUR_DATA_CHANGE_EVENT_NAME } from 'his-components'

window.addEventListener(HOT_KEY_CUR_DATA_CHANGE_EVENT_NAME, (event) => {
  console.log(event)
  store.commit('hotkey/setMicroAppHotKeyArr', event.detail)
})
```

### Tasking

- [x] 支持快捷键的指令注册
- [x] 支持快键键的修改
- [x] 支持快捷键的展示
- [x] 支持不同页面同一组件快捷键的统一修改
- [x] 支持元素不展示时的快捷键触发
- [x] 支持云端同步
- [x] 支持元素被遮挡时不触发
