## hot-key 热键方案

### 说明

该方案是为了方便 his 开发者便捷的进行快捷键的添加而设计的一套方案。基于 vue 的自定义指令，便于在任何地方添加。

### 使用

```html
<!-- 基础使用 -->
<div
  v-win-hotkey:[{eventName:`outpChargePayment`,eventDesc:`门诊收费收银`,defaultHotKey:`ctrl+z`}]="handleCashier"
/>

<!-- 组件使用 -->
<div
  v-win-hotkey:[{eventName:`outpChargePayment`,eventDesc:`门诊收费收银`,defaultHotKey:`ctrl+z`}].component="handleCashier"
/>

<!-- 允许在元素不在页面上时生效 -->
<div
  v-win-hotkey:[{eventName:`outpChargePayment`,eventDesc:`门诊收费收银`,defaultHotKey:`ctrl+z`}].always="handleCashier"
/>

<!-- 遍历配置 -->
<template v-for="item in list">
  <div
    :key="item"
    v-win-hotkey:[{eventName:`test${item}`,eventDesc:`测试`,defaultHotKey:`ctrl+${item}`,args:{data:item}}]="
          handler
        "
  ></div>
</template>
```

> :warning: 默认情况下，在指令所在的元素不存在与 dom 上时，快捷键的调用将不会生效，如需生效，请添加 always

> :warning: 如果组件在多个微应用中有应用，并且需要保持快捷键的统一，请添加 component。否则每个页面将独立维护各自的快捷键

### 参数说明

#### 中括号([])内的参数

| 参数名        | 说明                                         | 默认值 |
| ------------- | -------------------------------------------- | ------ |
| eventName     | 用于表明当前快捷键的事件名称                 | —      |
| eventDesc     | 当前快捷键的中文描述，用于在修改和展示中使用 | —      |
| defaultHotKey | 默认的快捷键，请全部小写                     | —      |
| args          | 用于给快捷键触发的函数传递的参数             | —      |

#### 通过.添加的参数

| 参数名    | 说明                                                                                                                   | 默认值 |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ------ |
| component | 默认情况下，快捷键的修改将根据页面来存储，即不同页面的同一组件，快捷键的修改互不干扰。添加此参数，会单独存储，统一修改 | —      |
| always    | 默认情况下，在组件没有销毁时，但指令注册的元素不在 dom 上时，快捷键将不会触发。添加该参数，将会保持触发。              | —      |

#### 等号后面的参数

| 参数名 | 说明                                        | 默认值 |
| ------ | ------------------------------------------- | ------ |
| —      | 快捷键触发将会调用的 vue 组件的 method 函数 | —      |

### Tasking

- [x] 支持快捷键的指令注册
- [x] 支持快键键的修改
- [x] 支持快捷键的展示
- [x] 支持不同页面同一组件快捷键的统一修改
- [x] 支持元素不展示时的快捷键触发
- [ ] 支持云端同步
