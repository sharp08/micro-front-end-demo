import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false

let instance = null
function render() {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app') //  这里是挂载到子应用原本的 html 中，基座会拿到这个挂载后的 html，放到基座自己对应的位置
}

// 如果在 qiankun 中运行，为保证子应用能正确找到资源
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 如果期望独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap(props) { }
export async function mount(props) {
  console.log(props)    //  能取到基座 main.js 传过来的属性
  render()
}
export async function unmount(props) {
  instance.$destroy()
}