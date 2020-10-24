import LandingPage from "./components/LandingPage/LandingPage.vue";
import SignInPage from "./components/SignInPage/SignInPage.vue";
import SignUpPage from "./components/SignUpPage/SignUpPage.vue";
import Error404 from "./components/Error404/Error404.vue";

export const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/signin",
    component: SignInPage,
  },
  {
    path: "/signup",
    component: SignUpPage,
  },
  /**
   * ================================
   * ADD ALL ROUTES ABOVE THIS ROUTE
   * ================================
   */
  {
    path: "*",
    component: Error404,
  },
];
