
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 
//自己写的样式
import '../style/theme.css'
import '../style/characters.css'
 
// 注册element-ui
Vue.use(ElementUI)
 
Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
