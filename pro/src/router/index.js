import Vue from 'vue'
import Router from 'vue-router'
import Hotlists from '@/views/Hotlists'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hotlists',
      name:'Hotlists',
      component:Hotlists 
    }
  ]
})
