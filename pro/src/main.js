// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App'
//导入vant

import router from './router'
import store from './store'
import './data/mock.js'
import './data/text.js'

Vue.config.productionTip = false
Vue.use(Vant);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
