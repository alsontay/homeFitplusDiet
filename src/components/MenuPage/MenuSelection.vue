<template>
  <div><app-recipes></app-recipes></div>
</template>

<script>
import Recipes from "./RecipesAPI.vue";

export default {
  name: "MenuSelection",
  components: {
    "app-recipes": Recipes,
  },
};
</script>

<style scoped></style>
