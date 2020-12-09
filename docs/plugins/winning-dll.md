## recharge 充值
winning-dll组件中定义的 充值 事件<br>

### 使用案列
his项目使用案例：账户退卡 - 充值 winning-web-account-management

### 使用

1、 初始化

```shell
#需要调用充值方法的页面直接import
import { recharge } from 'winning-dll'
```

2、调用

```shell
recharge({
    accountId: '',
    medPaymentMethodId: '',
    accountOwnerId: '',
    personalIdentityId: '',
    rechargeAmount: '',
    rechargeBy: this.userInfo.employeeId,
    hospitalSOID: '',
    operateEmployeeNo: this.userInfo.employeeNo
}).then(res => {
    if (res && res.success) {
        # // 充值成功
    } else {
        # // 充值失败
    }
}).catch(err => {
    # // 充值失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|
| accountId  | 账户标识|  | 必填    | String       |
| medPaymentMethodId | 支付方式ID   | | 必填   | String     |
| accountOwnerId  |  personId   |  | 必填    | Stirng     |
| personalIdentityId |  | 可选   | String    |
| rechargeAmount | 交易金额   |     |  必填   | String     | 
| rechargeBy   |  employeeId   |    |  必填   | String     |
| hospitalSOID  |医院SOID   |   | 必填   | String   | 
| operateEmployeeNo |  employeeNo   |   | 必填   | String   | 

### 注意事项
 暂无

## refund 退费
winning-dll组件中定义的 退费 事件<br>

### 使用案列
his项目使用案例：暂无，待开发

### 使用

1、 初始化

```shell
#需要调用退费方法的页面直接import
import { refund } from 'winning-dll'
```

2、调用

```shell
# outpRefundFeesettle 门诊退费DLL事件业务名称

const params = {
    billId: "128442498028255233",
    bizRoleId: "126801122587695105",
    chrgWinId: 0, // 窗口标识,暂时写死
    deptId: "11", // 暂时写死
    hospitalSOID: "256181",
    ipAddress: "192.168.53.83", 
    macAddress: "E8:D0:FC:FB:AC:25",
    operateEmployeeNo: "L10044",
    operatedBy: "57393746696202243",
    personId: "126801122587695104",
    posConceptId: "399211914", // 收费点概念标识，前端写死
    settlementId: "128442498028255232",
    refundDetailList: [
        {
            refundQty: 1, //
            settlementDetailId: "128442498028255233",
            billChangeReqDetailList: [] // 具体值取退费列表接口返回为准
        }
    ]
}

refund(params, 'outpRefundFeesettle').then(res => {
    if (res && res.success) {
        # // 退费成功
    } else {
        # // 退费失败
    }
}).catch(err => {
    # // 退费失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|
| billId  |  账单ID  |   |  必填   | String  | 
| bizRoleId  | 患者业务角色业务标识  |   |  必填   | String  | 
| chrgWinId  | 窗口标识,暂时写死  |  0  |  必填   | String  | 
| deptId  |  暂时写死   |  11   |  必填   | String  | 
| hospitalSOID  | 医院SOID  |   |  必填   | String  | 
| ipAddress  |  IP地址 |   |  必填   | String  | 
| macAddress  | mac地址  |   |  必填   | String  | 
| operateEmployeeNo  |  员工名称   |   employeeNo  |  必填   | String  | 
| operatedBy  |  员工标识   |   employeeId    |  必填   | String  | 
| personId  |  个人信息标识 |   |  必填   | String  | 
| posConceptId  |  收费点概念标识，前端写死 |  门诊：399211914  |  必填   | String  | 
| settlementId  | 结算单标识  |    |  必填   | String  | 
| refundDetailList  |  退费单详情  |  refundQty: '' 退费数量<br>settlementDetailId:''  结算单详情ID<br>billChangeReqDetailList: [] |  必填   | Array  | 

### 注意事项
    暂无

## refundCard 红冲退卡
winning-dll组件中定义的 红冲退卡 事件<br>

### 使用案列
his项目使用案例：充值退卡 - 红冲： winning-web-account-management

### 使用

1、 初始化

```shell
#需要调用充值方法的页面直接import
import { refundCard } from 'winning-dll'
```

2、调用

```shell
# offset 为 红冲退卡DLL事件名
const params = {
    accountId: ""
    accountOwnerId: ""
    hospitalSOID: ""
    medInstiPaymentMethodId: ""
    offsetBy: ""
    operateEmployeeNo: ""
    originalSerialNO: ""
    originalTxnAmount: 11
    originalTxnId: ""
    returnAmount: 11
    returnableAmount: 11
}

refundCard(params, 'offset').then(res => {
    if (res && res.success) {
        # // 退卡成功
    } else {
        # // 退卡失败
    }
}).catch(err => {
    # // 退卡失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|
| accountId  |  账户标识  |   |  必填   | String  | 
| accountOwnerId  | personId  |   |  必填   | String  | 
| hospitalSOID  | 医院SOID  |   |  必填   | String  | 
| medInstiPaymentMethodId  |  支付方式标识 |   |  必填   | String  | 
| operateEmployeeNo  |  员工名称   |   employeeNo  |  必填   | String  | 
| offsetBy  |  员工标识   |   employeeId    |  必填   | String  | 
| originalSerialNO  |   |   |  必填   | String  | 
| originalTxnAmount  |   |  399211914  |  必填   | String  | 
| originalTxnId  |   |    |  必填   | String  | 
| returnAmount  |   |    |  必填   | String  | 
| returnableAmount  |   |    |  必填   | String  | 

## readcard 读卡
winning-dll组件中定义的 读卡 事件<br>

### 使用案列
his项目使用案例：暂无

### 使用

1、 初始化

```shell
#需要调用读卡的页面直接import
import { readcard } from 'winning-dll'
```

2、调用

```shell

refundCard({}).then(res => {
    if (res && res.success) {
        # // 读卡成功
    } else {
        # // 读卡失败
    }
}).catch(err => {
    # // 读卡失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|

## issuingPrint 票据打印
winning-dll组件中定义的 票据打印 事件<br>

### 使用案列
his项目使用案例：暂无

### 使用

1、 初始化

```shell
#需要调用票据打印的页面直接import
import { issuingPrint } from 'winning-dll'
```

2、调用

```shell
issuingPrint({
    issuingFlag: '98175', // 必定为98175，不然第一步终止了
    printFlag: '',
    previewFlag: '',
    printTemplateId: '',
    printTemplateName: '',
    printTemplatePath: '',
    printQty: '',
}).then(res => {
    if (res && res.success) {
        # // 打印成功
    } else {
        # // 打印失败
    }
}).catch(err => {
    # // 打印失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|
| issuingFlag  |  开具标志  |  98175  |  必填   | Long  | 
| printFlag  | 打印标志  |   |  必填   | Long  | 
| previewFlag  | 仅预览不打印标志  |   |  必填   | Long  | 
| printTemplateId  |  打印模板标识 |   |  必填   | Long  | 
| printTemplateName  |  打印模板名称   |     |  必填   | String  | 
| printTemplatePath  |  打印模板路径   |       |  必填   | String  | 
| printQty  |  打印份数  |   |  必填   | String  |

## getMacAddress 获取Mac地址
winning-dll组件中定义的 获取Mac地址 事件<br>

### 使用案列
his项目使用案例：暂无

### 使用

1、 初始化

```shell
#需要调用获取Mac地址的页面直接import
import { getMacAddress } from 'winning-dll'
```

2、调用

```shell
getMacAddress().then(res => {
    if (res && res.success) {
        # // 获取Mac地址成功
    } else {
        # // 获取Mac地址失败
    }
}).catch(err => {
    # // 获取Mac地址失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|
|   |    |    |     |   | 

## getIpAddress 获取IP地址
winning-dll组件中定义的 获取IP地址 事件<br>

### 使用案列
his项目使用案例：暂无

### 使用

1、 初始化

```shell
#需要调用获取IP地址的页面直接import
import { getIpAddress } from 'winning-dll'
```

2、调用

```shell
getIpAddress().then(res => {
    if (res && res.success) {
        # // 获取IP地址成功
    } else {
        # // 获取IP地址失败
    }
}).catch(err => {
    # // 获取IP地址失败
})
```
### 参数说明
|  参数 |  说明   |   值   | 是否必填  |  类型  |
|--------|---------|----------|--------|-------|
|   |    |    |     |   | 