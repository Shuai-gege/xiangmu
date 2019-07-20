import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'






import payGoods from '@/views/payGoods'
import addMessage from '@/views/addMessage'
import Cart from '@/views/Cart'
import Setting from '@/views/Setting'
import setPassword from '@/views/setPassword'
import Message from '@/views/Message'
import Mine from '@/views/Mine'
import My from '@/views/My'
Vue.use(Toast)

Vue.use(Router)
export default new Router({
	routes:[
		 {
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
			component:Setting,
		 },
		 {
			path:'/setPassword',
			component:setPassword
			 
		},
		 {
			path:'/Message',
			component:Message
		 },
		 {
			path:'/my',
			component:My
		 },
		 {
			path:'/mine',
			component:Mine
		 },

	]
  
})
  
  
