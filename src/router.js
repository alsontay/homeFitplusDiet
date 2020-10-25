import Vue from "vue";
import Router from "vue-router";

import MainLayout from "./layouts/MainLayout.vue";
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";
import PlanPage from "./components/PlanPage.vue";
import MenuPage from "./components/MenuPage.vue";
import CalorieTrackerPage from "./components/CalorieTrackerPage.vue";
import MonthlyReportPage from "./components/MonthlyReportPage.vue";
import ProfilePage from "./components/ProfilePage.vue";
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
      path: "/",
      component: MainLayout,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "/home",
          component: HomePage,
        },
        {
          path: "/plan",
          component: PlanPage,
        },
        {
          path: "/menu",
          component: MenuPage,
        },
        {
          path: "/calorie-tracker",
          component: CalorieTrackerPage,
        },
        {
          path: "/monthly-report",
          component: MonthlyReportPage,
        },
        {
          path: "/profile",
          component: ProfilePage,
        },
        /**
         * ===========================
         * ADD ALL SECURED ROUTES HERE
         * ===========================
         */
      ],
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
