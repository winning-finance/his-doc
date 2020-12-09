# vue-cli-plugin-his 使用文档

新的大his本地开发、构建方法，完全依赖vue-cli, 为此，我们在vue-cli的基础上开发了his 插件，扩展了 serve 名利的功能

## 开始使用

```shell
# Install
# 安装
yarn add vue-cli-plugin-his --dev
# 或者
npm install vue-cli-plugin-his --dev

# Start app
# 开始使用
npm run serve or yarn serve
```

## 新增功能

- 自动登陆 (默认自动登陆)
- 环境选择 (默认 201、192、195)
- 本地Vue (可本地安装vue等，不使用his-main中的公共资源)

```shell
用法： yarn serve

#示例

yarn serve --skip login // 跳过自动登陆
yarn serve --skip env // 跳过环境选择
yarn serve --local // 使用本地Vue 实例
```
