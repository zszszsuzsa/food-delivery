
export default{
    props: {      
        category: {
            required: true
        }
    },
    methods:{
        getMenuByCategory(category){
            this.$emit('on-select-category', this.category);
        }
    }
}