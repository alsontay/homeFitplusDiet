import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// Vue-Material imports and themes
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// Local imports
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueMaterial);

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
