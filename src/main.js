import Vue from 'vue'
import App from './modules/APP/app.vue'
import BootstrapVue from 'bootstrap-vue'
import store from './common/store';

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {}
new Vue({
  el: '#app',
 
  render: h => h(App),

  components:{
		App
  }, 
  store
})