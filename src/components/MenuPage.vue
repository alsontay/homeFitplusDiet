<template>
  <div><app-recipes></app-recipes>
  <router-link to="/breakfastMenu"><button>BREAKFAST MENU</button></router-link>
  <router-link to="/lunchMenu"><button>LUNCH MENU</button></router-link>
  <router-link to="/dinnerMenu"><button>DINNER MENU</button></router-link>
  
  </div>
  
</template>

<script>
import Recipes from "./APIs/recipes.vue";

export default {
  name: "MenuPage",
  components: {
    "app-recipes": Recipes,
  },
};
</script>

<style scoped></style>
