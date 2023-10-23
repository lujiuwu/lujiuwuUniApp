
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 导入仓库
import store from '@/store/store.js'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
// 导入仓库
import store from '@/store/store.js'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	// 挂载
	store
  }
}
// #endif