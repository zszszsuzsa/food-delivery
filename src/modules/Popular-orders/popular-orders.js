import MenuItem from '../Menu/Menu-item/menu-item.vue';
import { mapActions} from 'vuex';
import store from '../../common/store';

export default {
    components:{
        MenuItem
    },
data () {
    return {
        open:true
    }
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
    toggle(){
        this.open=!this.open;
    },
    ...mapActions('cart', ['addToCart'])
}
}