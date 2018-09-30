import CartComponent from '../Cart/cart.vue';

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
        }
    }
}