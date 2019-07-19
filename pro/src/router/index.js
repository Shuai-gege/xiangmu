import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Quan from '@/viems/caipin'

import Kefu from '@/viems/kefu'
import Youhui from '@/viems/youhui'
import Shi from '@/viems/shixiao'
import Chang from '@/viems/changjian'
import Liao from '@/viems/liaotian'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
			redirect:'/caipin'
    },
    {
    	path:'/kefu',
    	component:Kefu
    },
    {
    	path:'/youhui',
    	component:Youhui
    },
    {
    	path:'/caipin',
    	component:Quan,
    },
    {
    	path:'/shixiao',
    	component:Shi
    },
    {
    	path:'/changjian',
    	component:Chang
    },
    {
    	path:'/liaotian',
    	component:Liao
    }
  ]
})
