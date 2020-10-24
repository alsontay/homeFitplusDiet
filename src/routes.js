import LandingPage from "./components/LandingPage/LandingPage.vue";
import LoginPage from "./components/LoginPage/LoginPage.vue";
import SignUpPage from "./components/SignUpPage/SignUpPage.vue";
import HomePage from "./components/HomePage/HomePage.vue";
import Error404 from "./components/Error404/Error404.vue";

export const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignUpPage,
  },
  {
    path: "/home",
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
];
