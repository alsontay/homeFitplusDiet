import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./firebase";
import * as mdbvue from "mdbvue";

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
