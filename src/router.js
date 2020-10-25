import Vue from "vue";
import Router from "vue-router";

import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage/HomePage.vue";
import Error404 from "./components/Error404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    /**
     * ================================
     * ADD ALL ROUTES ABOVE THIS ROUTE
     * ================================
     */
    {
      path: "/error-404",
      component: Error404,
    },
    {
      path: "*",
      redirect: "/error-404",
    },
  ],
});
