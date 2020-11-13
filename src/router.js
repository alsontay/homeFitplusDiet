import Vue from "vue";
import Router from "vue-router";

import MainLayout from "./layouts/MainLayout.vue";
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";
import ProfilePage from "./components/ProfilePage/index.vue";

import MenuForm from "./components/MenuPage/MenuForm.vue";
import MenuView from "./components/MenuPage/MenuView.vue";
import MenuSelection from "./components/MenuPage/MenuSelection.vue";

import FitnessForm from "./components/FitnessPage/FitnessForm.vue";
import FitnessRec from "./components/FitnessPage/FitnessRec.vue";

import CalorieTrackerPage from "./components/CalorieTrackerPage.vue";
import MonthlyReport from "./components/MonthlyReportPage/MonthlyReport.vue";

import Error404 from "./components/Error404.vue";

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
          path: "/fitness-form",
          component: FitnessForm,
          meta: {
            title: "Fitness Form",
          },
        },
        {
          path: "/fitness-rec",
          component: FitnessRec,
          meta: {
            title: "Fitness Rec",
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
          component: MonthlyReport,
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
          path: "/menu-form",
          component: MenuForm,
          meta: {
            title: "Menu Form",
          },
        },
        {
          path: "/menu-selection",
          component: MenuSelection,
          meta: {
            title: "Menu Selection",
          },
        },
        {
          path: "/menu-view",
          component: MenuView,
          meta: {
            title: "Menu View",
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
