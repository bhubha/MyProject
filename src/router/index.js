import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstpage from '@/components/firstpage'
import createoption from '@/components/createoption'
import viewoption from '@/components/viewoption'
import deleteoption from '@/components/deleteoption'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/create',
      name: 'createoption',
      component: createoption
    },
    {
      path: '/view',
      name: 'viewoption',
      component: viewoption
    },
    {
      path: '/delete',
      name: 'deleteoption',
      component: deleteoption
    }
  ]
})
