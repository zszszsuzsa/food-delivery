export const cartState = {
    cart: [],
    length: 0,
    total: 0,
    wrongAmount:true
};

export const cartMutations = {
    addToCart(state, cartItem) {
        state.cart.push(cartItem);
        state.length = state.cart.length;
        state.total += cartItem.Price;
        if (state.total>20000 || state.total===0){
            state.wrongAmount=true}
         else {state.wrongAmount=false}
    },
    removeFromCart(state, {cartItem:cartItem, index:index}) {
        state.cart.splice(index, 1); 
        state.total -=cartItem.Price
        state.length = state.cart.length;
        if (state.total>20000 || state.total===0){
            state.wrongAmount=true}
            else {state.wrongAmount=false}
        }
    };

export const cartActions = {
    addToCart(context, cartItem) { context.commit('addToCart', cartItem); },
    removeFromCart(context, {cartItem:cartItem, index:index}){context.commit('removeFromCart', {cartItem:cartItem, index:index}) }
};