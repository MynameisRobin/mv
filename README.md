# vue 移动端base

基于**VantUI**的 Vue 移动站点工程,使用 vue-cli V4 构建。

## 默认配置
1. px转rem,可以直接根据设计图使用px单位愉快的构建页面
2. 全量引入vantUI组件库,页面直接使用
3. 引入less,支持全局自定义主题配色
4. 引入axios工具,全局数据拦截

## 兼容性
支持所有的现代浏览器和 IE9+

## 技术栈
- vue-cli v4
- vuejs 
- vue-router
- vuex
- [Vant](https://youzan.github.io/vant/#/zh-CN/home)
- less
- [axios](https://github.com/axios/axios)

## 项目命令

### 安装依赖
```
npm install
```

### 开发热加载运行
```
npm run serve
或
npm run devs
```

### 测试编译打包
```
npm run build:test
```

### 编译打包
```
npm run build
```

### Vue CLI v4 配置参考
See [Configuration Reference](https://cli.vuejs.org/config/).


## 项目目录结构

```
├─config --------------- // 项目基础配置目录 [px to rem] 
├─public --------------- // 项目渲染页面目录
├─src 
│  ├─assets ------------- // 静态资源目录
│  ├─components --------- // 业务组件目录
│  ├─helper ------------- // 业务工具目录
│  ├─router ------------- // 路由目录
│  ├─store -------------- // Vuex 状态管理目录
│  ├─utils -------------- // 项目工具文件目录
│  ├─views -------------- // 页面视图目录
│  ├─App.vue ------------ // 项目根节点
│  └─main.js ------------ // 项目入口
├─.browserslistrc ------ // 目标浏览器配置
├─.eslintrc.js --------- // eslint 配置文件
├─.gitignore ----------- // git 过滤规则
└─babel.config.js ------ // babel的配置

```

