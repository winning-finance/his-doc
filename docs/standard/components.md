## 组件的规范
为了组件的调用以及参数解析的统一，特制定组件的统一规范
### 组件的数据类型规范
该规范基本参考winning后台的数据规范。返回数据要求是一个对象，需要包含以下几个属性
- `success`:`boolean类型`。用于标识组件的运行是否成功。原则上，在以`promise`方式调用的方法组件里，`then`方法的`success`为`true`,`catch`方法里为`false`
- `data`:`any类型`。组件需要返回的数据
- `errorDetail`:`Error类型 或者是 后端的errorDetail对象`。组件返回的错误数据，
- `cancel`:`boolean类型`。当组件中途取消的时候，该字段将为`true`。在以`promise`方式调用的方法组件里，将会通过`then`方法返回

```javascript
{
    success:true,
    data:{},
    errorDetail:undefined,
    cancel:undefined
}
```


### 消息提示规范
各组件在运行中，组件可以自行弹出对应的消息提示或者错误信息。但是，**在组件运行完成或者异常，将要回调到上层时，组件不允许弹出任何消息，由调用者来进行消息的提示**

### 普通组件事件规范
事件名称请使用kebab-casem(即短横线)命名的方式。
```
    this.$emit('on-change')
    <test-element @on-change="change"/>
```

