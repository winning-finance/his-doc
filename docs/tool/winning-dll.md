## winning-dll 组件
> 集中封装混合框架调用事件DLL方法

### 开始使用
1、安装

```shell
# Install
# 将npm源切换为winning
npm install winning-dll -S
# 或者
yarn add winning-dll -S
```

2、调用<br>

```javascript
// getIpAddress 为 winning-dll 内注册事件
import { getIpAddress } from 'winning-dll'

const res = await getIpAddress()
console.log('IP信息', res)
```

### winning-dll内注册事件

1、 注册事件名
```javascript
// 打开 ./src/index.js 
export const issuingPrint = WinningSDK.issuingPrint.bind(WinningSDK)
```

2、 注册事件方法
```javascript
// 打开 ./src/core/index.js
/**
 * 取消医保正算
 * @param {*} params
 */

// 1、只有事件ID
static cancelInsurSettled(params) {
  return this.instance._dispatchEvent('399309970', params);
}

// 2、事件ID、事件funcname
static cancelInsurSettled(params, name = 'cancelInsurSettled') {
  return this.instance._dispatchEvent({id: '399309970', name}, params);
}
```
2、调用
```javascript
import WinningDll from 'winning-dll'

const { success, errorDetail } = await WinningDll.cancelInsurSettled({
  login: operateInfo,
  setlInsurReimDetailId,
  medInstiInterfaceId,
  settlementId
})
if (success) {
  // 成功
}
if (!success || success === 'false') {
  // 失败
  throw errorDetail
}
```
