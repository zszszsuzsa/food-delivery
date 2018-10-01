import PopularItem from './Popular-item/popular-item.vue';
import { mapActions} from 'vuex';
import store from '../../common/store';

export default {
    components:{
        PopularItem
    },

props:{
    popularOrders:{
        required:true
    }
},
methods: {
    sendToCart(item){
        this.menuItem=item;
        store.dispatch('cart/addToCart', item)
    },
    ...mapActions('cart', ['addToCart'])
}
}