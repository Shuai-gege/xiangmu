import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'
<<<<<<< HEAD
import Hotlists from '@/views/Hotlists'



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
    }
  ]
})
