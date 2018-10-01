import CartItem from './Cart-item/cart-item.vue';
import { mapState, mapActions } from 'vuex';
import store from '../../common/store';


export default {
    components: {
        CartItem
    },
    methods: {
        remove(item, index) {
            store.dispatch('cart/removeFromCart', { cartItem: item, index: index })
        },
        remainOpen(e) {
            e.stopPropagation();
        },
        ...mapActions('cart', ['removeFromCart'])
    },
    computed: {
        ...mapState('cart', ['cart', 'total'])
    }
}