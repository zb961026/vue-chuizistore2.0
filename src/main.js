// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue模块
import App from './App' // 引入app主页面
import store from './store/index.js'
import router from '@/router/index.js' // 引入路由文件
import axios from '../node_modules/axios'
// import '@/assets/css/reset.css' // 引入样式表文件
// import '@/assets/css/header.css'
// import '@/assets/css/footer.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 使用router
  store, // 使用vuex
  axios,
  components: { App },
  template: '<App/>'
})
