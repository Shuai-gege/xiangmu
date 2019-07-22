import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'






import payGoods from '@/views/payGoods'
import addMessage from '@/views/addMessage'
/*import Cart from '@/views/Cart'*/
import Setting from '@/views/Setting'
import setPassword from '@/views/setPassword'
import Message from '@/views/Message'
/*import Mine from '@/views/Mine'*/
/*import My from '@/views/My'*/
Vue.use(Toast)

Vue.use(Router)


import jssHome from "@/views/jssHome"
import jssLogin from "@/views/jssLogin"
import jssRegister from "@/views/jssRegister"
import jssIndex from "@/views/jssIndex"
/*import jssMine from "@/views/jssMine"*/
/*import jssCart from "@/views/jssCart"*/
import jssComlist from "@/views/jssComlist"
import jssAdishes from "@/views/jssAdishes"
import jssZhezhao from "@/views/jssZhezhao"

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
    	
    }
  ]
})
*/

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
    			path:"/jssZhezhao",
    			component:jssZhezhao
    		},
    		{
    			path:"/jssAdishes",
    			component:jssAdishes
    		},
    		{
    			path:"/jssComlist",
    			component:jssComlist
    		},
    		
    	]
    	
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
    }
  ]
 })