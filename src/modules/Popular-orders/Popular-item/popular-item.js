export default{
    props:{
        name: {
            required:true
        },
        price:{
            required:true
        },
        popularItem:{
            required:true
        }
    },
    methods:{
		addToCart(e){
            this.$emit('on-forwardToCart', this.popularItem)
                //make dropdown menu remain open
                e.stopPropagation();
		}
	}
}