import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Page1 from '@/pages/page1/Page1'
import Page2 from '@/pages/page2/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id',
      component: Home,
      children: [
        {path: '/page1',component: Page1},
        {path: '/page2',component: Page2}
      ]
    }
  ]
})
