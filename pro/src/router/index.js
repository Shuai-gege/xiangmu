import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'
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
import jssZhezhao from "@/views/jssZhezhao"
// CJQ
import payGoods from '@/views/payGoods'
import addMessage from '@/views/addMessage'
import Cart from '@/views/Cart'
import Setting from '@/views/Setting'
import setPassword from '@/views/setPassword'
import Message from '@/views/Message'
import My from '@/views/My'
import payMoney from '@/views/payMoney'
import reGoods from '@/views/reGoods'
import History from '@/views/History'
//
//段飞虎
import dfhDetail from "@/views/dfhDetail"
import dfhHotlists from "@/views/dfhHotlists"
//
export default new Router({
	routes: [
	{
		path:"/dfhDetail/:id",
		component:dfhDetail
	},
	{
			path: '/payMoney',
			component: payMoney
		},
		{
			path: '/reGoods',
			component: reGoods
		},
		{
			path: "/history",
			component: History
		},
		{
			path: '/Message',
			component: Message
		},
		{
			path: '/setting',
			component: Setting,
		},
		{
			path: '/setPassword',
			component: setPassword

		},
		{
			path: "/",
			redirect: '/jsslogin'
		},
		{
			path: "/jsslogin",
			component: jssLogin
		},
		{
			path: "/jssRegister",
			component: jssRegister
		},
		{
			path: "/jssIndex",
			redirect: "/jssHome",
			component: jssIndex,
			children: [

				{
					path: "/jssHome",
					component: jssHome
				},
				{
					path: "/jssZhezhao",
					component: jssZhezhao
				},
				{
					path: "/jssCart",
					component: jssCart,
					children: [{
						path: '/cart',
						component: Cart
					}]
				},
				{
					path: "/jssAdishes",
					component: jssAdishes
				},
				{
					path: "/jssComlist",
					component: jssComlist,
					children:[
						{
							path:"/dfhHotlists",
							component:dfhHotlists
						}
					]
				},
				{
					path: "/jssMine",
					component: jssMine,
					children: [{
						path: '/my',
						component: My
					}, ]
				},
				//CJQ
				{
					path: '/payGoods',
					component: payGoods
				},
				{
					path: '/addMessage',
					component: addMessage
				},

			]

		}
	]
})