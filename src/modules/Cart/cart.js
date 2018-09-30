import CartItem from './Cart-item/cart-item.vue';
export default{
    components:{
        CartItem
    },
    props:{
        name:{
            required:false
        },
        price:{
            required:false
        }
    },
    data(){
        return{
            cartItems:[],
            total: 0
        }
    },
    methods:{
        calulateTotal(){
            this.price+=total;
        },
        fillCartItems(){
            this.cartItems.push([this.name, this.price])
        }
    }

}