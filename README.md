<!--
 * @Author: smallalso<hu141418@gmail.com>
 * @Date: 2020-12-08 18:33:27
 * @LastEditors: smallalso<hu141418@gmail.com>
 * @LastEditTime: 2020-12-18 14:28:50
 * @FilePath: /his-doc/README.md
-->
# 使用 vue-press 做的文档项目

## 如何使用

- ~~在 docs 文件夹下，建立你的分类标题对应的文件夹，文件夹名即为标题名。~~ 现在请直接在大 his 专栏下建立 md 文件，取消上一级目录，更加扁平
- 在文件夹下建立对应的 md 文件即可。 注:排序可在 md 文件名之前加上`1.`这样的序号进行排序
- 在 docs/.vuepress/dirSortConf 文件中，配置分类(目录)之间的展示顺序
- 访问路径`xxx/文件夹名/文件名`
- 建议第一个文件名使用`README.md`或`index.md`，这样可以直接通过文件夹名访问

## 如何部署

- ~~github 上的部署，直接运行 deploy.sh~~ github直接提交即可，workflow自动构建
- docker 可以使用 start.sh

## 注意

- 最终一个文档的标题是取的 md 文件的 h2 标题，而不是文件名。所以这边采用了文件名标序号的方式进行排序
