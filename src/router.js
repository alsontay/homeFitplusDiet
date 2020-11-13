import Vue from "vue";
import Router from "vue-router";

import MainLayout from "./layouts/MainLayout.vue";
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";
import FitnessForm from "./components/FitnessPage/FitnessForm.vue";
import FitnessRec from "./components/FitnessPage/FitnessRec.vue";
import DietPage from "./components/DietPage.vue";
import MenuPage from "./components/MenuPage.vue";
import CalorieTrackerPage from "./components/CalorieTrackerPage.vue";
import MonthlyReportPage from "./components/MonthlyReportPage.vue";
import ProfilePage from "./components/ProfilePage/index.vue";
import Error404 from "./components/Error404.vue";
import MenuView from "./components/menus/MenuView.vue";
import MenuSelected from "./components/menus/MenuSelected.vue";
import MenuSelection from "./components/menus/MenuSelection.vue";

Vue.use(Router);

/**
 * ==============================================================
 * HOW TO ADD A ROUTE?
 * {
 *  path: <path to route>
 *  name: <name of route (totally optional cause we dont use...)>
 *  component: .vue component of the page
 *  meta: {
 *    title: <This string appears on your browser tab>
 *  }
 * }
 * ==============================================================
 */

export default new Router({
  mode: "history",
  base: __dirname,
  scrollBehavior() {
    // Resets the scroll of the brower to 0 everytime the route changes
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
          path: "/home",
          component: HomePage,
          meta: {
            title: "Home",
          },
        },
        {
          path: "/fitnessform",
          component: FitnessForm,
          meta: {
            title: "FitnessForm",
          },
        },
        {
          path: "/fitnessrec",
          component: FitnessRec,
          meta: {
            title: "FitnessRec",
          },
        },
        {
          path: "/dietplan",
          component: DietPage,
          meta: {
            title: "DietPlan",
          },
        },
        {
          path: "/menu",
          component: MenuPage,
          meta: {
            title: "Menu",
          },
        },
        {
          path: "/calorie-tracker",
          component: CalorieTrackerPage,
          meta: {
            title: "Calorie Tracker",
          },
        },
        {
          path: "/monthly-report",
          component: MonthlyReportPage,
          meta: {
            title: "Monthly Report",
          },
        },
        {
          path: "/profile",
          component: ProfilePage,
          meta: {
            title: "Profile",
          },
        },
        {
          path: "/menuSelected",
          component: MenuSelected,
          meta: {
            title: "MenuSelected",
          },
        },
        {
          path: "/menuSelection",
          component: MenuSelection,
          meta: {
            title: "MenuSelection",
          },
        },
        {
          path: "/menuView",
          component: MenuView,
          meta: {
            title: "MenuView",
          },
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
      meta: {
        title: "Error 404",
      },
    },
    {
      path: "*",
      redirect: "/error-404",
    },
  ],
});
