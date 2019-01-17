import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Done from '@/components/Done'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Welcome',
      component:Welcome
    },
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/done',
      name:'Done',
      component:Done
    }
  ]
})
