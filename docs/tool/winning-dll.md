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

### 事件注册

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
3、调用
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

### 已注册事件参数说明

1、getMacAddress： 获取Mac地址
|  参数  | 说明 | 类型 |
|--------|----------|-------------|
| 无   | 无       | 无 |

2、getIpAddress： 获取IP地址
|  参数  | 说明 | 类型 |
|--------|----------|-------------|
| 无   | 无       | 无 |

3、reconciliation： 支付对账
|  参数  | 说明 | 类型 |
|--------|----------|-------------|
| loginInfo   | 登陆信息<br> {<br>  hospitalSOID：业务医院SOID<br>  deptId：登录科室标识<br>  operatedBy：操作人员标识<br>  operatorNo：操作人员编码<br>}       | Entity |
| paymentReconciliationId   |  支付对账单标识  | Long |
4、issuingPrint： 票据打印
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| issuingFlag   | -       | string | 98175|
| previewFlag   | 仅预览不打印标志       | Long | -|
| printTemplateId   | 打印模板标识       | Long | -|
| printTemplateName   | 打印模板名称       | string | -|
| printTemplatePath   | 打印模板路径       | string | -|
| printQty   | 打印份数       | Integer | -|

5、readcard： 读卡
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| identityEntryId   | -       |  | string|
| identityEntryName   |        | string | -|
| hospitalSOID   | 业务医院SOID       | string | -|
| identityNo   |  身份标识号码      | string | -|
| applicationCode   |        | string | -|
| identityTypeCode   |        | Integer | -|
| login   | 登陆信息<br> {<br>  employeeId：员工标识<br>  employeeName：员工名称<br>  departmentId：<br>  departmentName：<br>ipAddress：IP地址<br>mac：Mac地址<br>medInstiId：<br>medInstiName：<br>} | Entity | - |

6、recharge： 充值
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| -   | -       | - | -|

7、refund： 退费
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| -   | -       | - | -|

8、refundCard： 红冲退卡
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| -   | -       | - | -|

9、getOutDInsuranceBudget： 获取门诊医保预算结果
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| settlementId  | 结算单标识       | Long | -|
| setlInsurReimDetailId  | 结算单医保报销交易明细标识       | Long | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

10、getRegInsuranceBudget： 获取挂号医保预算结果
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| settlementId  | 结算单标识       | Long | -|
| setlInsurReimDetailId  | 结算单医保报销交易明细标识       | Long | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

11、getOutDInsuranceZS： 获取门诊医保正算结果
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| settlementId  | 结算单标识       | Long | -|
| setlInsurReimDetailId  | 结算单医保报销交易明细标识       | Long | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>userId、userNo、operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

12、getRegInsuranceZS： 获取挂号医保正算结果
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| settlementId  | 结算单标识       | Long | -|
| setlInsurReimDetailId  | 结算单医保报销交易明细标识       | Long | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>userId、userNo、operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

13、toPay： 收银支付
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| paymentId  | 支付明细标识       | Long | -|
| txnAmount  | 交易金额       | Double | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| thirdPartyPaymentTraceId  | 第三方支付交易明细标识       | Long | -|
| login  | 登陆信息：<br>operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

14、invoiceInfo：电子发票数量获取
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>operatedBy、operatorNo、hospitalSOID、deptId       | - | -|

15、cancelThirdPartyCharge：取消第三方支付
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| thirdPartyPaymentTraceId  | 第三方支付交易明细标识       | Long | -|
| paymentId  | 支付明细标识       | Long | -|
| txnAmount  | 交易金额       | Double | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| accountInfo  | -       | - | -|
| login  | 登陆信息：<br>operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

15、cancelInsurPreSettled：取消医保预算
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| settlementId  | 结算单标识       | Long | -|
| setlInsurReimDetailId  | 结算单医保报销交易明细标识       | Long | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

16、cancelInsurSettled：取消医保正算
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| settlementId  | 结算单标识       | Long | -|
| setlInsurReimDetailId  | 结算单医保报销交易明细标识       | Long | -|
| medInstiInterfaceId  | 医疗机构的接口标识       | Long | -|
| login  | 登陆信息：<br>operatedBy、operateEmployeeNo、hospitalSOID、deptId       | - | -|

17、generateSettlementPic：结账单图片生成
|  参数  | 说明 | 类型 | 默认值|
|--------|----------|-------------|-------------|
| -  | -       | - | -|