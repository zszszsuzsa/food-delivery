import PopularItem from './Popular-item/popular-item.vue';

export default {
    components:{
        PopularItem
    },

props:{
    popularOrders:{
        required:true
    }
}
}