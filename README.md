# 微前端样例
- 本样例基座应用使用 `vue` 脚手架搭建，子应用分别使用 `vue` 和 `react` 进行搭建
- 本质上就是将子应用放到父应用的不同路由里面，并通过父应用中添加的标签来呈现

# 注意事项
- 基座应用的 `id` 与子应用 `id` 避免冲突
- `react` 进行配饰需要安装包 `yarn add react-app-rewired`，用来重写 `react` 配置，修改 `package.json` 的脚本为 
```
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-app-rewired eject"
}
```
- `react` 的端口通过新建 `env` 文件进行配置