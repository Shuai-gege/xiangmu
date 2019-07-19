// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import  './data/mock.js'

<<<<<<< HEAD
Vue.use(Vant);
=======
import './data/mock.js'
import './data/text.js'
>>>>>>> 8374d1cdcb790bdf17afd27d3994d163c7dbf94d
Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
