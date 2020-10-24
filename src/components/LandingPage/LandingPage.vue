<template>
  <div class="page">
    <div class="body">
      <div class="container">
        <div class="logobox">
          <img
            src="/images/logo.png"
            alt="logo"
            width="200"
            height="200"
            class="logo md-large-hide"
          />
          <div class="title">
            <span class="md-display-3"> HOMEFIT+DIET </span><br /><br />
            <span class="md-display-1"> Eat Fit, Keep Fit </span>
          </div>
        </div>
        <div class="box">
          <span class="md-body-1">
            We aim to help you achieve your goals in fitness and dieting while
            you are stuck at home! Our fitness and diet plans are crafted by an
            algorithm designed by professional coaches and nutritionists. So if
            you stuck to the plans, we guarantee that you will see results!
            <br /><br />
            Happy EATING FIT and KEEPING FIT!
          </span>
        </div>
        <div class="box">
          <md-button
            class="md-primary md-raised md-lg actionbutton"
            to="/signup"
          >
            Sign Up
          </md-button>
          <md-button
            class="md-primary md-raised md-lg actionbutton"
            to="/signin"
          >
            Login
          </md-button>
        </div>
      </div>
      <div class="container">
        <img src="/images/undraw_pilates_gpdb.svg" class="md-medium-hide"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
@import "./LandingPage.css";
</style>

<!-- <div id="body">
      <h2>WELCOME TO HOMEFIT+DIET!</h2>
      <h3>
        We aim to help you achieve your goals in fitness and dieting while you
        are stuck at home! <br />
        Our fitness and diet plans are crafted by an algorithm designed by
        professional coaches and nutritionists. <br />
        So if you stuck to the plans, we guarantee that you will see results!
        <br /><br />
        Happy EATING FIT and KEEPING FIT!
      </h3>
      <md-button class="md-dense md-raised md-primary" href="/signin">
        Sign In
      </md-button>
    </div> -->
