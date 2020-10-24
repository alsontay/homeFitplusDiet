import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
