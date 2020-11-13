<template>
  <h1>THIS FITNESS REC</h1>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      exRequest: 'exercise',
    }),
  },

  data() {
    return {
      equipmentList: [],
      intensity: "",
    }
  },

  mounted() {
    this.equipmentList = this.exRequest.equipments;
    this.intensity = this.exRequest.intensity;
  },
};
</script>
<style scoped></style>
