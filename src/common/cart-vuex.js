export const cartState = {
	cart: [],
	length: 0,
	total: 0,
	wrongAmount: true,
	cartToPost: []
};

export const cartMutations = {
	increaseCart(state, cartItem) {
		state.cart.push(cartItem);
	},
	decreaseCart(state, index) {
		state.cart.splice(index, 1);
	},
	setLength(state) {
		state.length = state.cart.length;
	},
	increaseTotal(state, cartItem) {
		state.total += cartItem.Price;
	},
	decreaseTotal(state, cartItem) {
		state.total -= cartItem.Price;
	},
	setWrongAmountFalse(state) {
		state.wrongAmount = false;
	},
	setWrongAmountTrue(state) {
		state.wrongAmount = true;
	},
	setDefault(state) {
		state.cart = [];
		state.length = state.cart.length;
		state.total = 0;
		state.wrongAmount = true;
	},
	addPersonalData(state, { name: name, address: address, phone: phone }) {
		for (let i = 0; i < state.cartToPost.length; i++) {
			state.cartToPost[i].push(name);
			state.cartToPost[i].push(address);
			state.cartToPost[i].push(phone);
		}
	}
};

export const cartActions = {
	addToCart({ commit, state }, cartItem) {
		if (state.total < 20000) {
			commit('increaseCart', cartItem);
			state.cartToPost.push([cartItem.Id])
			commit('setLength');
			commit('increaseTotal', cartItem);
			commit('setWrongAmountFalse');
			if (state.total > 20000 || state.total === 0) {
				commit('setWrongAmountTrue');
			}
		}
		else {
			commit('setWrongAmountTrue');
		}
	},
	removeFromCart({ commit, state }, { cartItem: cartItem, index: index }) {
		commit('decreaseTotal', cartItem);
		commit('decreaseCart', index);
		state.cartToPost.splice(index, 1);
		commit('setLength');
		if (state.total > 20000 || state.total === 0) {
			commit('setWrongAmountTrue');
		}
		else {
			commit('setWrongAmountFalse');
		}
	},
	addPersonalData(context, { name: name, address: address, phone: phone }) { context.commit('addPersonalData', { name: name, address: address, phone: phone }) },
	clearCart(context) { context.commit('setDefault') }
};