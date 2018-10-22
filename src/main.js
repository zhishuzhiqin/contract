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
Vue.prototype.instance = instance
Vue.use(Element, { size: 'small', zIndex: 3000 })

const instance = axios.create({
  baseURL: '/api',
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

instance.interceptors.response.use(
  data => {
    if (data.headers.sessionstatus && data.headers.sessionstatus === 'timeout') {
      router.push({path: '/'})
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
