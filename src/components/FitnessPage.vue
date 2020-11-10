<template>
  <div><app-exercises></app-exercises></div>
</template>

<script>
import Exercises from "./APIs/exercises.vue";
export default {
  name: "FitnessPage",
  components: {
    "app-exercises": Exercises,
  },
};
</script>

<style scoped></style>
