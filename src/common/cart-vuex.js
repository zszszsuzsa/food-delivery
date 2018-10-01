export const cartState = {
    cart: [],
    length: 0,
    total: 0
};

export const cartMutations = {
    addToCart(state, cartItem) {
        state.cart.push(cartItem);
        state.length = state.cart.length;
        state.total += cartItem.Price
    },
    removeFromCart(state, {cartItem:cartItem, index:index}) {
        state.cart.splice(index, 1); 
        state.total -=cartItem.Price
        state.length = state.cart.length;
    }
};

export const cartActions = {
    addToCart(context, cartItem) { context.commit('addToCart', cartItem); },
    removeFromCart(context, {cartItem:cartItem, index:index}){context.commit('removeFromCart', {cartItem:cartItem, index:index}) }
};