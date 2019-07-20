import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'


/*import Quan from '@/viems/caipin'
import Kefu from '@/viems/kefu'
import Youhui from '@/viems/youhui'
import Shi from '@/viems/shixiao'
import Chang from '@/viems/changjian'
import Liao from '@/viems/liaotian'*/

/*import Quan from '@/viems/apengcaipin'
import Kefu from '@/viems/apengkefu'
import Youhui from '@/viems/apengyouhui'
import Shi from '@/viems/apengshixiao'
import Chang from '@/viems/apengchangjian'
import Liao from '@/viems/apengliaotian'*/

import Hotlists from '@/views/Hotlists'


// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/views/Index'

import payGoods from '@/views/payGoods'
import addMessage from '@/views/addMessage'

import Setting from '@/views/Setting'
import setPassword from '@/views/setPassword'
import Message from '@/views/Message'
Vue.use(Toast)

Vue.use(Router)

import jssHome from "@/views/jssHome"
import jssLogin from "@/views/jssLogin"
import jssRegister from "@/views/jssRegister"
import jssIndex from "@/views/jssIndex"
import jssMine from "@/views/jssMine"
import jssCart from "@/views/jssCart"
import jssComlist from "@/views/jssComlist"
import jssAdishes from "@/views/jssAdishes"

/*export default new Router({
  routes: [
    {
    	path:"/",
    	redirect:'/jsslogin'
    },
    {
    	path:"/jsslogin",
    	component:jssLogin
    },
    {
    	path:"/jssRegister",
    	component:jssRegister
    },
    {
    	path:"/jssIndex",
    	redirect:"/jssHome",
    	component:jssIndex,
    	children:[
    		{
    			path:"/jssHome",
    			component:jssHome
    		},
    		{
    			path:"/jssCart",
    			component:jssCart
    		},
    		{
    			path:"/jssAdishes",
    			component:jssAdishes
    		},
    		{
    			path:"/jssComlist",
    			component:jssComlist
    		},
    		{
    			path:"/jssMine",
    			component:jssMine
    		},
    	]
<<<<<<< HEAD
    	
    }
  ]
})
*/

/*export default new Router({
	routes: [
  	
    {
    	path:"/",
    	redirect:'/jsslogin'
    },
    {
    	path:"/jsslogin",
    	component:jssLogin
    },
    {
    	path:"/jssRegister",
    	component:jssRegister
    },
    {
    	path:"/jssIndex",
    	redirect:"/jssHome",
    	component:jssIndex,
    	children:[
    		{
    			path:"/jssHome",
    			component:jssHome
    		},
    		{
    			path:"/jssCart",
    			component:jssCart
    		},
    		{
    			path:"/jssAdishes",
    			component:jssAdishes
    		},
    		{
    			path:"/jssComlist",
    			component:jssComlist
    		},
    		{
    			path:"/jssMine",
    			component:jssMine
    		},
    	],
    },
    {
    	path:'/apengkefu',
    	component:Kefu
    },
    {
    	path:'/apengyouhui',
    	component:Youhui
    },
    {
    	path:'/apengcaipin',
    	component:Quan,
    },
    {
    	path:'/apengshixiao',
    	component:Shi
    },
    {
    	path:'/apengchangjian',
    	component:Chang
    },
    {
    	path:'/apengliaotian',
    	component:Liao

      path: '/hotlists',
      name:'Hotlists',
      component:Hotlists,
        path:'/cart',
        component:Cart
    },
  	{
      path:'/payGoods',
      component:payGoods
    },
    {
      path:'/addMessage',
      component:addMessage
    },
    
    {
      path:'/setting',
      component:Setting
    },
    {
      path:'/setPassword',
      component:setPassword
    },
    {
      path:'/message',
      component:Message
    }*/
export default new Router({
  routes: [
    {
    	path:"/",
    	redirect:'/jsslogin'
    },
    {
    	path:"/jsslogin",
    	component:jssLogin
    },
    {
    	path:"/jssRegister",
    	component:jssRegister
    },
    {
    	path:"/jssIndex",
    	redirect:"/jssHome",
    	component:jssIndex,
    	children:[
    		{
    			path:"/jssHome",
    			component:jssHome
    		},
    		{
    			path:"/jssCart",
    			component:jssCart
    		},
    		{
    			path:"/jssAdishes",
    			component:jssAdishes
    		},
    		{
    			path:"/jssComlist",
    			component:jssComlist
    		},
    		{
    			path:"/jssMine",
    			component:jssMine
    		},
    	]
    	
    }
  ]
})

  
