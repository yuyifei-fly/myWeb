import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入reset 页面样式重置
import 'reset-css/reset.css'
Vue.config.productionTip = false
// 注册element-ui
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
