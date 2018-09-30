import Vue from 'vue'
import App from './modules/APP/app.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {}
new Vue({
  el: '#app',
  render: h => h(App),

  components:{
		App
	}
})

// var opts = {
//   url: "http://localhost:8081/rows"
// };

// fetch(opts)
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(rows => {
//     for (let row of rows) {
//     }
//   })
//   .catch(console.log);
