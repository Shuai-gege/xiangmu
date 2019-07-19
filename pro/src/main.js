// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App'
//导入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
<<<<<<< HEAD
import Vant from 'vant';
import Axios from "axios"
import 'vant/lib/index.css';
import store from "./store"

Vue.use(Vant)
Vue.config.productionTip = false
=======
<<<<<<< HEAD
import store from "./store"

=======
import Vant from 'vant';
import 'vant/lib/index.css';
import  './data/mock.js'
>>>>>>> a5751f966c453fa37bf5d9d54279bf1b0b5641af

<<<<<<< HEAD
Vue.use(Vant);
=======
import './data/mock.js'
import './data/text.js'
>>>>>>> 8374d1cdcb790bdf17afd27d3994d163c7dbf94d
Vue.config.productionTip = false
Vue.use(Vant);
<<<<<<< HEAD

=======
>>>>>>> a5751f966c453fa37bf5d9d54279bf1b0b5641af
>>>>>>> 8aa92db63e24980590733986b5b95ecb28389b07
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
