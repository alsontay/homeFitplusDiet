import Vue from "vue";
import Router from "vue-router";

import MainLayout from "./layouts/MainLayout.vue";
import LandingPage from "./components/LandingPage.vue";
import HomePage from "./components/HomePage.vue";
import FitnessPage from "./components/FitnessPage.vue";
import DietPage from "./components/DietPage.vue";
import MenuPage from "./components/MenuPage.vue";
import CalorieTrackerPage from "./components/CalorieTrackerPage.vue";
import MonthlyReportPage from "./components/MonthlyReportPage.vue";
import ProfilePage from "./components/ProfilePage/index.vue";
import Error404 from "./components/Error404.vue";
import BreakfastMenu from "./components/menus/BreakfastMenu.vue";
import LunchMenu from "./components/menus/LunchMenu.vue";
import DinnerMenu from "./components/menus/DinnerMenu.vue";
import Breakfast from "./components/menus/Breakfast.vue";
import Lunch from "./components/menus/Lunch.vue";
import Dinner from "./components/menus/Dinner.vue";

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
          path: "/fitnessplan",
          component: FitnessPage,
          meta: {
            title: "FitnessPlan",
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
          path: "/breakfastMenu",
          component: BreakfastMenu,
          meta: {
            title: "BreakfastMenu",
          },
        },
        {
          path: "/LunchMenu",
          component: LunchMenu,
          meta: {
            title: "LunchMenu",
          },
        },
        {
          path: "/dinnerMenu",
          component: DinnerMenu,
          meta: {
            title: "DinnerMenu",
          },
        },
        {
          path: "/breakfast",
          component: Breakfast,
          meta: {
            title: "Breakfast",
          },
        },
        {
          path: "/lunch",
          component: Lunch,
          meta: {
            title: "Lunch",
          },
        },
        {
          path: "/dinner",
          component: Dinner,
          meta: {
            title: "Dinner",
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
