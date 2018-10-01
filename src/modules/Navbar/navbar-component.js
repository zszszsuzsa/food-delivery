import CartComponent from '../Cart/cart.vue';
import {mapState, mapActions } from 'vuex';

export default {
    components: {
        CartComponent
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
            keyword:''
        }
    },
    methods:{
        searchKeyword(){
            this.$emit('on-set-keyword', this.keyword);
        },
        keepOpen(e){
            e.stopPropagation();
        },
        ...mapActions('menu', ['setMenu']),
    },
    computed:{
        ...mapState('cart', ['length']),
    }
}