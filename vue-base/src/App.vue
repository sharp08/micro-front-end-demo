<template>
  <div id="baseApp">
    <div id="nav">
      <!-- 基座自己的路由 -->
      <router-link to="/">Home</router-link>|
      <!-- 引用某个 vue 应用 -->
      <router-link to="/vue">to vue app</router-link>|
      <!-- 引用某个 react 应用 -->
      <router-link to="/react">to react app</router-link>
    </div>
    <!-- 基座 -->
    <router-view />
    <!-- 挂载 vue 应用 -->
    <div id="vue"></div>
    <!-- 挂载 react 应用 -->
    <div id="react"></div>
  </div>
</template>

<style lang="less">
#baseApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
