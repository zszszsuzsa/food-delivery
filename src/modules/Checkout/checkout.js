import { mapState, mapActions } from 'vuex';
import api from '../../api/api';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {required} from 'vuelidate/lib/validators';
import store from '../../common/store';
import ErrorMessage from '../error-message/error-message';

Vue.use(Vuelidate)

export default {
	components: {
		ErrorMessage
	},
	data() {
		return {
			name: null,
			address: null,
			phone: null,
			submitStatus:null
		}
	},
	validations: {
		name: {
				required
			},
		address: {
				required
			},
			phone: {
				required
			}
		},
	methods: {
		postCart() {
			return new Promise((resolve, reject) => {
				api.postCartContent(this.cartToPost).then(result => {
					resolve(result.data, this.submitStatus='SENT', this.clearCart());
				})
					.catch(error => {
						store.dispatch('error/setError', 
							{ segment:'getPopularOrders',errorMessage:'Nem sikerült elküldeni a rendelést',error:true});
						console.error("Nem sikerült elküldeni a rendelést", {
							error: error
						});
						reject(error);
					})
			});
		},
		checkInvalid(){
			if (this.$v.$invalid) {
				this.submitStatus='ERROR';
			} else {
				this.submitStatus='PENDING';
			}
		},
		checkError(){
			this.$v.$touch();
			if (this.$v.$invalid) {
				this.submitStatus='ERROR';
			} else {
				this.submitStatus='SENT';
				this.addPersonalData({ name: this.name, address: this.address, phone: this.phone });
				this.postCart();
				this.clearCart();
			}
		},
		save(){
			this.checkError();
		},
		close() {
			this.$emit('on-cancel')
		},
		clearData() {
			this.name = '',
			this.address = '',
			this.phone = null
		},
		
		...mapActions('cart', ['addPersonalData', 'clearCart'])
	},
	computed: {
		...mapState('cart', ['cart', 'cartToPost'],'error',['hasError'])
	}
}