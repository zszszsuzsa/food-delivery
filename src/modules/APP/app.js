import api from '../../api/api';
import Bootstrap from 'Bootstrap';
import jQuery from 'jquery';
import NavbarComponent from '../Navbar/navbar-component.vue';
import MenuComponent from '../Menu/menu.vue';
import PopularOrders from '../Popular-orders/popular-orders.vue';

export default {
    data() {
        return {
           popularOrders:[],
           searchResult:[],
           keyword:''
        }
    },
    components: {
        NavbarComponent,
        MenuComponent,
        PopularOrders
    },
    methods: {

        getCategories() {
            return new Promise((resolve, reject) => {
                api.getCategoryNames().then(result => {
                    resolve(this.message = result.data);
                })
                    .catch(error => {
                        console.error("Nem sikerült a lekérni a kategóriák neveit", {
                            error: error
                        });
                        reject(error);
                    })
            });
        },
        getPopularOrders(){
            return new Promise((resolve, reject) => {
                api.getTopOrders().then(result => {
                    resolve(this.popularOrders = result.data);
                })
                    .catch(error => {
                        console.error("Nem sikerült a lekérni a legnépszerűbb ételeket", {
                            error: error
                        });
                        reject(error);
                    })
            });
        },
        getSearchResult(keyword){
            return new Promise((resolve, reject) => {
                this.keyword=keyword;
                api.getSearchResult(this.keyword).then(result => {
                    resolve(this.searchResult = result.data);
                })
                    .catch(error => {
                        console.error("Nem sikerült a lekérni a találatokat", {
                            error: error
                        });
                        reject(error);
                    })
            });
        }
    },
    
    mounted() {
        this.getPopularOrders();
    }
}