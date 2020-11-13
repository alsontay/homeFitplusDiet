<template>
  <div v-if="user.loggedIn" class="page">
    <mdb-navbar
      style="z-index: 100"
      expand="large"
      dark
      color="default"
      :toggler="false"
    >
      <mdb-navbar-brand id="title">HOMEFIT+DIET</mdb-navbar-brand>
      <mdb-navbar-nav right class="nav-flex-icons">
        <router-link to="/home">
          <mdb-nav-item id="navmenu-icon"
            ><mdb-icon icon="home" />Home</mdb-nav-item
          >
        </router-link>
        <router-link to="/menu-form">
          <mdb-nav-item id="navmenu-icon"
            ><mdb-icon icon="utensils" />Menu</mdb-nav-item
          >
        </router-link>

        <router-link to="/fitness-form">
          <mdb-nav-item id="navmenu-icon"
            ><mdb-icon icon="dumbbell" />Workout</mdb-nav-item
          >
        </router-link>

        <router-link to="/calorie-tracker">
          <mdb-nav-item id="navmenu-icon"
            ><mdb-icon icon="search" />Calorie Tracker</mdb-nav-item
          >
        </router-link>
        <router-link to="/monthly-report">
          <mdb-nav-item id="navmenu-icon"
            ><mdb-icon icon="file-alt" />Monthly Report</mdb-nav-item
          >
        </router-link>
        <mdb-dropdown tag="li" class="nav-item" end>
          <mdb-dropdown-toggle
            tag="a"
            navLink
            color="default"
            slot="toggle"
            waves-fixed
            icon="user"
          />
          <mdb-dropdown-menu color="default">
            <router-link to="/profile">
              <mdb-dropdown-item
                ><mdb-icon icon="user" id="navmenu-icon" />My
                Profile</mdb-dropdown-item
              >
            </router-link>
            <mdb-dropdown-item @click="signOut"
              ><mdb-icon
                icon="sign-out-alt"
                id="navmenu-icon"
              />Logout</mdb-dropdown-item
            >
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar>
    <main :style="{ marginTop: $store.state.docs ? '60px' : '0px' }">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <div class="footer-copyright text-center py-3">
      <mdb-container fluid class="fixed-bottom">
        &copy; 2020 Goal Diggers
      </mdb-container>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase";
import { mapGetters } from "vuex";

export default {
  name: "LandingLayout",
  created: function () {
    if (!this.user.loggedIn)
      return this.$router.push({
        path: "/",
        query: { redirect: this.$router.currentRoute.path },
      });
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    async signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
.page {
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.fixed-bottom {
  background-color: white;
  width: 100%;
  bottom: 0;
}
#title {
  font-family: "Caveat", cursive;
}

#navmenu-icon {
  margin-right: 10px;
}
</style>
