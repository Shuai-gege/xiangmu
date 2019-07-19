import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'
<<<<<<< HEAD
//import HelloWorld from '@/components/HelloWorld'
import Index from "@/views/Index"
import Adishes from "@/views/Adishes"
import Mine from "@/views/Mine"
import Cart from "@/views/Cart"
import Home from "../views/Home"
import Comlist from "@/views/Comlist"
import Login from "@/views/Login"
import Register from "@/views/Register"
=======
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
import Quan from '@/viems/caipin'
>>>>>>> 8aa92db63e24980590733986b5b95ecb28389b07

import Kefu from '@/viems/kefu'
import Youhui from '@/viems/youhui'
import Shi from '@/viems/shixiao'
import Chang from '@/viems/changjian'
import Liao from '@/viems/liaotian'
=======
<<<<<<< HEAD
import Hotlists from '@/views/Hotlists'
>>>>>>> a5751f966c453fa37bf5d9d54279bf1b0b5641af



=======
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/views/Index'
import Cart from '@/views/Cart'
import payGoods from '@/views/payGoods'
import addMessage from '@/views/addMessage'
import Mine from '@/views/Mine'
import Setting from '@/views/Setting'
import setPassword from '@/views/setPassword'
import Message from '@/views/Message'
Vue.use(Toast)
>>>>>>> 8374d1cdcb790bdf17afd27d3994d163c7dbf94d
Vue.use(Router)

export default new Router({
  routes: [
  	{
    	path:'/',
    	redirect:"/login"
    },
    {
<<<<<<< HEAD
    	path:"/login",
    	component:Login
    },
    {
    	path:"/register",
    	component:Register
    },
    {
    	path:"/index",
    	redirect:"/home",
    	component:Index,
    	children:[
    		{
    			path:"/home",
    			component:Home
    		},
    		{
    			path:"/comlist",
    			component:Comlist
    		},
    		{
    			path:"/cart",
    			component:Cart
    		},
    		{
    			path:"/Mine",
    			component:Mine
    		},
    		{
    			path:"/adishes",
    			component:Adishes
    		}
    	]
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      path: '/hotlists',
      name:'Hotlists',
      component:Hotlists 
=======
        // path:'/index',
        // component:index,
        // children:[
        //   {
             
        //   }
        // ]
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
      path:'/mine',
      component:Mine
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
>>>>>>> 8374d1cdcb790bdf17afd27d3994d163c7dbf94d
>>>>>>> a5751f966c453fa37bf5d9d54279bf1b0b5641af
>>>>>>> 8aa92db63e24980590733986b5b95ecb28389b07
    }
  ]
})
