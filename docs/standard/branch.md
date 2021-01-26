
## 大his分支策略管理

为确保产品有序更新迭代，有必要统一大his前端代码分支管理策略

### 示意图

<img src="./imgs/branch.jpg">

### 分支说明

一、门诊、his共用项目

| 分支名称 | 分支性质 | 说明 |
| --------|------|----------------------------|
| RC | 长久分支 | 现场分支 |
| develop| 长久分支 | 门诊测试分支 （门诊）|
| develop_his | 长久分支 | his测试分支 （可以理解为 192） |
| task_dev| 长久分支 | 需求开发分支 （可以理解为 201） |
| feature/xxx | 临时分支 | 任务开发分支 （通常开发任务时从task_dev copy的临时分支，任务开发完，由测试通知合并）xxx 代表任务号 |
| bug/xxx | 临时分支 | 解决bug的分支 （一般测试开出的bug,从develop 或者 develop_his cpoy 解决bug的分支）xxx 代表 bug号 |

**注意：develop 与 develop_his为包含关系，develop_his 门诊的RC分支会定期向develop_his合并**

二、 his 独立的项目

| 分支名称 | 分支性质 | 说明 |
| --------|------|----------------------------|
| RC_HIS | 长久分支 | 现场分支 |
| develop_his | 长久分支 | his测试分支 （可以理解为 192） |
| task_dev| 长久分支 | 需求开发分支 （可以理解为 201） |
| feature/xxx | 临时分支 | 任务开发分支 （通常开发任务时从task_dev copy的临时分支，任务开发完，由测试通知合并）xxx 代表任务号 |
| bug/xxx | 临时分支 | 解决bug的分支 （一般测试开出的bug,从develop_his cpoy 解决bug的分支）xxx 代表 bug号 |

**备注：** 与门诊共用的项目区别在于 无 develop 分支 和 RC 分支，新增RC_HIS 分支

三、需求管理原始文档

[需求迭代管理文档](https://winwiki.winning.com.cn/pages/viewpage.action?pageId=20402513&preview=/20402513/20402514/%E5%A4%A7HIS%E5%88%86%E6%94%AF%E7%AD%96%E7%95%A5%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.docx)


四、关于α版本封版

1. 门诊相关分支（develop, RC）的bug和需求迭戈修改需要合到 develop_his 和 task_dev
2. his相关的修改测试bug 修改基于 develop_his, 修改完成需要同步到 develop_his 和 task_dev
3. his相关的需求迭代，基于 develop_his, 开发完成之后可以合并到 task_dev，在201 自测, 待测试、产品通知 再合并到 develop_his

**his的α版封版基于develop_his新开 RC_HIS 分支 作为现场环境**
