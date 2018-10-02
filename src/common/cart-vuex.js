export const cartState = {
    cart: [],
    length: 0,
    total: 0,
    wrongAmount: true,
    cartToPost:[]
};

export const cartMutations = {
    addToCart(state, cartItem) {
        if (state.total < 20000) {
            state.cart.push(cartItem);
            state.cartToPost.push([cartItem.Id])
            state.length = state.cart.length;
            state.total += cartItem.Price;
            state.wrongAmount = false;
            if (state.total > 20000 || state.total === 0) {
                state.wrongAmount = true;
            }
        }
        else {
            state.wrongAmount = true;
        }


    },
    removeFromCart(state, { cartItem: cartItem, index: index }) {
        state.cart.splice(index, 1);
        state.total -= cartItem.Price
        state.length = state.cart.length;
        if (state.total > 20000 || state.total === 0) {
            state.wrongAmount = true
        }
        else { state.wrongAmount = false }
    },
    clearCart() {
        state.cart = [];
    },
    addPersonalData(state, {name:name, address:address, phone:phone}){
        for (let i=0; i<state.cartToPost.length; i++)
        {
            state.cartToPost[i].push(name);
            state.cartToPost[i].push(address);
            state.cartToPost[i].push(phone);
        }
    }
};

// export const cartGetters={
//     inCart: state => state.cartToPost
// }



export const cartActions = {
    addToCart(context, cartItem) { context.commit('addToCart', cartItem); },
    removeFromCart(context, { cartItem: cartItem, index: index }) { context.commit('removeFromCart', { cartItem: cartItem, index: index })
    },
    addPersonalData(context,{name:name,address:address,phone:phone}){ context.commit('addPersonalData', {name:name,address:address,phone:phone})}
};