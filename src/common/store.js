import Vue from 'vue';
import Vuex from 'vuex';
import { menuState, menuMutations, menuActions, menuGetters } from '../common/menu-vuex';
import { cartState, cartMutations, cartActions, cartGetters } from '../common/cart-vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        menu:{
            namespaced: true,
			state: menuState,
			mutations: menuMutations,
            actions: menuActions,
            getters: menuGetters
        },
        cart:{
            namespaced: true,
			state: cartState,
			mutations: cartMutations,
            actions: cartActions,
            getters: cartGetters
        },
    }
});