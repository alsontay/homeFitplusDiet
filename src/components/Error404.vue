<template>
  <div class="landing-page center">
    <section id="section">
      <section class="center">
        <div id="section-card">
          <mdb-row class="center">
            <div id="error-image">
              <img src="/images/undraw_page_not_found_su7k.svg" width="100%" />
            </div>
          </mdb-row>
          <mdb-row class="center">
            <p class="text-justify">
              The page you are looking for doesn&apos;t exist.<br />Go back, or
              use the button below to go back to home.
            </p>
          </mdb-row>
          <mdb-row class="center">
            <router-link to="/">
              <mdb-btn large color="default"> Back to Home </mdb-btn>
            </router-link>
          </mdb-row>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Error404Page",
  components: {},
};
</script>

<style scoped>
.landing-page {
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  background-color: rgb(243, 239, 239);
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#section {
  padding: 15px;
  max-width: 1300px;
}

#section-card {
  padding: 15px;
  max-width: 90%;
}

#error-image {
  max-width: 500px;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
