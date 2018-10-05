import Vue from 'vue';
import Vuex from 'vuex';
import { menuState, menuMutations, menuActions } from '../common/menu-vuex';
import { cartState, cartMutations, cartActions } from '../common/cart-vuex';
import { errorState, errorMutations, errorActions } from '../modules/error-message/error-message-vuex';

Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		menu:{
			namespaced: true,
			state: menuState,
			mutations: menuMutations,
			actions: menuActions
		},
		cart:{
			namespaced: true,
			state: cartState,
			mutations: cartMutations,
			actions: cartActions
		},
		error:{
			namespaced: true,
			state: errorState,
			mutations: errorMutations,
			actions: errorActions
		}
	}
});