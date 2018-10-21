import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import VariableManage from '@/pages/variableManage/VariableManage'
import TemplateManage from '@/pages/templateManage/TemplateManage'
import RuleSetting from '@/pages/ruleSetting/RuleSetting'
import RuleCheck from '@/pages/ruleCheck/RuleCheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/:id',
      component: Home,
      children: [
        {path: '/variableManage', component: VariableManage},
        {path: '/templateManage', component: TemplateManage},
        {path: '/ruleSetting', component: RuleSetting},
        {path: '/ruleCheck', component: RuleCheck}
      ]
    }
  ]
})
