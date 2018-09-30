export const cartState = {
    cart: [],
};

export const cartMutations = {
    addToCart(state, cartItem) { state.push(cartItem); },
};

export const cartGetters = {
    getCartState: ()=>cartState
};

export const cartActions = {
    addToCart(context, cartItem) { context.commit('addToCart', cartItem); }
};