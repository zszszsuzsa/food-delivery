import api from '../../api/api';
import Bootstrap from 'Bootstrap';
import jQuery from 'jquery';
import Checkout from '../Checkout/checkout.vue';
import ErrorMessage from '../error-message/error-message.vue';
import NavbarComponent from '../Navbar/navbar-component.vue';
import MenuComponent from '../Menu/menu.vue';
import PopularOrders from '../Popular-orders/popular-orders.vue';
import { mapActions, mapState } from 'vuex';
import store from '../../common/store';

export default {
	data() {
		return {
			popularOrders: [],
			searchResult: [],
			keyword: '',
			searched: false,
			checkout:false
		}
	},
	components: {
		Checkout,
		ErrorMessage,
		NavbarComponent,
		MenuComponent,
		PopularOrders
	},
	watch: {
		searchResult(newValue) {
			store.dispatch('menu/setMenu', newValue)
		}
	},
	methods: {
		getPopularOrders() {
			return new Promise((resolve, reject) => {
				api.getTopOrders().then(result => {
					resolve(this.popularOrders = result.data);
				})
					.catch(error => {
						store.dispatch('error/setError', { segment:'getPopularOrders',errorMessage:'Nem sikerült lekérni a legnépszerűbb rendeléseket',error:true});
						console.error("Nem sikerült lekérni a legnépszerűbb ételeket", {
							error: error
						});
						reject(error);
					})
			});
		},
		getSearchResult(keyword){
			this.keyword=keyword;
			return new Promise((resolve, reject) => {
				api.getSearchResult(this.keyword).then(result => {
					resolve(this.searchResult = result.data, this.searched=true);
				})
					.catch(error => {
						store.dispatch('error/setError', { segment:'getPopularOrders',errorMessage:'Nem sikerült lekérni a találatokat',error:true});
						console.error("Nem sikerült lekérni a találatokat", {
							error: error
						});
						reject(error);
					})
			});
		},
		...mapActions('menu', ['setMenu'])
	},
	computed: {
	...mapState('error',['hasError'])	
	},
	created() {
		this.getPopularOrders();
	}
}