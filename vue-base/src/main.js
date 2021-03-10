import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10001',  //  默认会加载这个 html，解析里面的 js 动态执行（子应用必须支持跨域）
    container: '#vue',  //  容器 id
    activeRule: '/vue',  //  激活的路径
    props: {
      a: 1
    }
  },
  {
    name: 'reactApp',
    entry: '//localhost:10002',  //  默认会加载这个 html，解析里面的 js 动态执行（子应用必须支持跨域）
    container: '#react',
    activeRule: '/react'
  }
]
registerMicroApps(apps)   //  注册应用
start() //  开启


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#baseApp')
