# his-cli 使用文档
大his脚手架命令，提供模板下载、子应用模板下载、项目更新等相关功能

## 开始使用

```shell
# Install
# 安装
yarn global add his6.0-cli
# 或者
npm install his6.0-cli -g

# Create main app
# 创建新项目
his create myapp

# Start app
# 开始使用
cd myapp
yarn run serve
```

## 常用命令

拥有两个常用命令: `create`, `add`.

### create

<span title="Create main app with new directory.">创建新项目到指定目录中</span>

```shell
his create [options]
```

```shell
#示例
his create myapp
his new myapp --demo
his new myapp --no-install
```

#### options

- `--demo` <span title="Generate a dead simple project for quick prototype">-- 快速生成一个简易的示例原型</span>
- `--no-install` <span title="Disable npm install after files created">-- 创建完成后不自动运行`npm install`</span>

### add

<span title="create sub app in main app">在父项目中创建子项目</span>

```shell
his add [subAppName]
```

```shell
# 示例
his add mySubApp
```


### update

<span title="create sub app in main app">更新子应用中主应用版本及子应用vue相关配置</span>

```shell
his update
```
