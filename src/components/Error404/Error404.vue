<template>
  <div id="page">
    <div class="errorimage">
      <img src="/images/undraw_page_not_found_su7k.svg" />
    </div>
    <div class="errortext">
      <span class="md-display-1">Page not found.</span><br /><br />
      <span class="md-body"
        >The page you are looking for doesn&apos;t exist.<br />Go back, or use
        the button below to go back to home.</span
      >
    </div>
    <md-button class="md-accent" to="/"> Back to home </md-button>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style scoped>
@import "./Error404.css";
</style>
