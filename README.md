# 微前端样例

创建基础工程 `vue-base`，路由选择 `history` 模式

```
winpty vue.cmd create vue-base
```

创建 `vue-app`，路由选择 `history` 模式

```
winpty vue.cmd create vue-app
```

创建 `react-app`

```
npx create-react-app react-app
```

基座 id 与子 id 避免冲突

yarn add react-app-rewired，用来重写 react 配置，修改 package.json 的脚本为 
```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-app-rewired eject"
}
```
添加 `config-overrides.js`