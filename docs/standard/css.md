<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-16 20:54:15
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-17 15:11:29
 * @FilePath: /his-doc/docs/standard/css.md
-->
## 样式规范

1. 界面UI风格统一，__公共组件样式原则不允许覆盖__，有需要请找ued 或者 在前端群里反馈。
2. 不用轻易使用!important、行内样式。
3. 全局样式文件，项目中统一命名，如 global.scss , 全局样式前面有唯一标识， 如 global-className.
4. 不能用“_”下划线来命名CSS选择器 如 main_title 请使用 main-title
5. 尽量要让人看懂你的命名
6. 局部样式不要写在全局样式文件中