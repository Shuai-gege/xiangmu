import Vue from "vue"
<<<<<<< HEAD
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import modules from "./modules"


Vue.use(Vuex);

export default new Vuex.Store({
	modules,
	actions,
	mutations,
	getters,
	state,
	
})
=======
import Vuex from 'vuex'
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules
})
	








>>>>>>> 8aa92db63e24980590733986b5b95ecb28389b07

