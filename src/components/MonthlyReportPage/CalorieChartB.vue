<template>
  <div class="chart">
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./CalorieChartB.js";

export default {
  components: {
    Chart,
  },
  mounted() {
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 5000);
  },
};
</script>

<style></style>
