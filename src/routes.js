import LandingPage from "./components/LandingPage/LandingPage.vue";
import SignInPage from "./components/SignInPage/SignInPage.vue";
import SignUpPage from "./components/SignUpPage/SignUpPage.vue";

/**
 * Array of url routes.
 */
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
  // { path: '/signin', component:  },
  // { path: '/signup', component:  },
  // { path: '/home', component:  },
];
