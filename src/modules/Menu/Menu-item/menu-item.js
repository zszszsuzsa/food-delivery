export default{
	props: {
		name: {
			required: true
		}, 
		description:{
			required:false
		},
		price:{
			required: true
		},
		spicy:{
			required:false
		},
		vegetarian:{
			required:false
		},
		menuItem:{
			required:true
		}
	},
	methods:{
		addToCart(e){
			this.$emit('on-forwardToCart', this.menuItem)
			//make dropdown menu remain open
			e.stopPropagation();
		}
	}
}