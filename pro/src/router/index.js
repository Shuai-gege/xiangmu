import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Index from "@/views/Index"
import Adishes from "@/views/Adishes"
import Mine from "@/views/Mine"
import Cart from "@/views/Cart"
import Home from "../views/Home"
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
    }
  ]
})
