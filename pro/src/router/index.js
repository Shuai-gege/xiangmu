import Vue from 'vue'
import { Toast } from 'vant';
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/views/Index'
import Cart from '@/views/Cart'
import payGoods from '@/views/payGoods'
import addMessage from '@/views/addMessage'
import Mine from '@/views/Mine'
import Setting from '@/views/Setting'
import setPassword from '@/views/setPassword'
Vue.use(Toast)
Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
