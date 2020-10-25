import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./firebase";
import * as mdbvue from "mdbvue";

/**
 * ===========================================================================
 * This is to add all the components from mdbvue package into your vue project
 * ===========================================================================
 */
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component]);
}

Vue.config.productionTip = false;

/**
 * ======================================================================
 * This is a global error handler to handle exceptions thrown in the code
 * ======================================================================
 */
Vue.config.errorHandler = (error, vm, info) => {
  console.error(error.message);
};

/**
 * ========================================================================================
 * This is to update the user object in store everytime the authentication state is changed
 * ========================================================================================
 */
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
  console.log(user);
});

/**
 * ================================================================================================
 * This is to update the name of the page on the tab of your browser everytime the route is changed
 * ================================================================================================
 */
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || "HOMEFIT+DIET";
  });
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
