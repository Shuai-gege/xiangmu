import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from "@/views/Index"
import Adishes from "@/views/Adishes"
import Mine from "@/views/Mine"
import Cart from "@/views/Cart"
import Comlist from "@/views/Comlist"
import Login from "@/views/Login"
import Register from "@/views/Register"

Vue.use(Router)

export default new Router({
  routes: [
  	{
    	path:'/',
    	redirect:"/login"
    },
    {
    	path:"/login",
    	component:Login
    },
    {
      path: '/index',
      component: Index,
      children:[
      	
      ]
    },
    {
      path:"/adishes",
      component:Adishes
    },
    {
      path:"/mine",
      component:Mine
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/comlist",
      component:Comlist
    },
    {
    	path:"/register",
    	component:Register
    }
    
    
  ]
})
