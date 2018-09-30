import api from '../../api/api.js';
import CategoryItem from './Category-item/category-item.vue';
import MenuItem from './Menu-item/menu-item.vue';


export default {
    data() {
        return {
            categories: [],
            menu: [],
            keyword:'',
            clicked: false
        }

    },
    components: {
        CategoryItem,
        MenuItem
    },
    methods: {
        getCategories() {
            return new Promise((resolve, reject) => {
                api.getCategoryNames().then(result => {
                    resolve(this.categories = result.data, this.clicked=true);
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
                    resolve(this.menu = result.data, this.clicked=true);
                })
                    .catch(error => {
                        console.error("Nem sikerült lekérni a katgóriát", {
                            error: error
                        });
                        reject(error);
                    })
            });
        },
        showSearchResult(){
            this.menu=this.searchresult;
        }
    },
    mounted() {
        this.getCategories()
        // this.getMenuByCategory(this.categories)
    }
}