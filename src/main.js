// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import 'styles/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/iconfont.css'
import 'styles/border.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// const instance = axios.create({
//   baseURL: 'http://localhost:8888',
//   headers: {'X-Requested-width': 'XMLHttpRequest'}
// })
const host = process.env.NODE_ENV === 'development' ? '/api' : '' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
const instance = axios.create({
  baseURL: host,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

Vue.prototype.instance = instance

instance.interceptors.response.use(
  data => {
    debugger
    if (data.headers.sessionstatus && data.headers.sessionstatus === 'timeout') {
      router.push({path: '/login'})
      this.$message({
        showClose: true,
        message: '请重新登录',
        type: 'error'
      })
    }
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
