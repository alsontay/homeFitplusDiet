<template>
  <div><app-recipes></app-recipes></div>
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
