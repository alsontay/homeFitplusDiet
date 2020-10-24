<template>
  <div id="app">
    <Header />
    <!-- <nav>
      Home  {{'\xa0'}} {{'\xa0'}}
      Progress
    </nav> -->
    <div id = "body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#body {
  width: 100vw;
  height: 80vh;
}

nav {
  padding: 5px;
  padding-bottom: 15px;
  color: #2c3e50;
  background:rgb(185, 222, 195);
}

</style>


