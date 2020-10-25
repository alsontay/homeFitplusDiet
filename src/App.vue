<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap");
</style>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 5px;
  padding-bottom: 15px;
  color: #2c3e50;
  background: rgb(185, 222, 195);
}

nav {
  padding: 5px;
  padding-bottom: 15px;
  color: #2c3e50;
  background: rgb(185, 222, 195);
} */
</style>
