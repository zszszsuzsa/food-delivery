import api from '../../api/api.js';
import CategoryItem from './Category-item/category-item.vue';
import MenuItem from './Menu-item/menu-item.vue';
import { mapActions, mapState } from 'vuex';
import store from '../../common/store';

export default {
    components: {
        CategoryItem,
        MenuItem
    },
    data() {
        return {
            categories: [],
            menuItem:{}
        }
    },
    props:{
        searched:{
            required:false
        }
    },
    methods: {
        getCategories() {
            return new Promise((resolve, reject) => {
                api.getCategoryNames().then(result => {
                    resolve(this.categories = result.data);
                })
                    .catch(error => {
                        console.error("Nem sikerült a lekérni a kategóriák neveit", {
                            error: error
                        });
                        reject(error);
                    })
            });
        },
        getMenuByCategory(category) {
            return new Promise((resolve, reject) => {
                api.getMenuByCategory(category).then(result => {
                    resolve(this.setMenuContent(result.data), this.searched=false);
                })
                    .catch(error => {
                        console.error("Nem sikerült lekérni a katgóriát", {
                            error: error
                        });
                        reject(error);
                    })
            });
        },
        setMenuContent(result){
                store.dispatch('menu/setMenu', result)
        },
        sendToCart(item){
            this.menuItem=item;
            store.dispatch('cart/addToCart', item)
        },
        ...mapActions('menu', ['setMenu']),
        ...mapActions('cart', ['addToCart'])

    },
    mounted() {
        this.getCategories()
    },
    computed:{
        ...mapState('menu',['menu'])
    }
}