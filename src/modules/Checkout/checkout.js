import { mapState, mapActions } from 'vuex';
import api from '../../api/api';

export default {
	data() {
		return {
			name: '',
			address: '',
			phone: null
		}
	},
	methods: {
		close() {
			this.$emit('on-cancel')
		},
		postCart() {
			this.addPersonalData({ name: this.name, address: this.address, phone: this.phone })
			return new Promise((resolve, reject) => {
				api.postCartContent(this.cartToPost).then(result => {
					resolve(result.data, this.clearData(), this.close());
				})
					.catch(error => {
						console.error("Nem sikerült lementeni a rendelést", {
							error: error
						});
						reject(error);
					})
			});
		},
		clearData() {
			this.name = '',
			this.address = '',
			this.phone = null
		},

		...mapActions('cart', ['addPersonalData'])

	},
	computed: {
		...mapState('cart', ['cart', 'cartToPost'])
	}
}