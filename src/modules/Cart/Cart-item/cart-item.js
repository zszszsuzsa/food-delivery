export default {
	props: {
		name: {
			required:true
		},
		price: {
			required:true
		},
		index:{
			required:true
		},
		item:{
			required:true
		}
	},
	methods: {
		removeFromCart(){
			this.$emit('on-remove', this.item.Id, this.index)
		}
	}
}