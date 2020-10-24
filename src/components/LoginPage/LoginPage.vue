<template>
  <div id="page">
    <md-card id="signincard">
      <div id="signinheader">
        <md-avatar class="md-avatar-icon md-primary md-large" id="signinicon">
          <md-icon class="md-size-3x">lock_open</md-icon>
        </md-avatar>
        <span class="md-display-1">Login</span>
      </div>
      <md-divider id="signindivider"></md-divider>
      <div id="signinform">
        <form @submit="submit">
          <md-field>
            <label>Email</label>
            <md-input v-model="form.email"></md-input>
          </md-field>
          <md-field id="signininput">
            <label>Password</label>
            <md-input v-model="form.password" type="password"></md-input>
          </md-field>
          <md-button class="md-raised md-primary" id="signinbutton" type="submit">
            Login
          </md-button>
          <div v-if="error" id="errormessage">{{ error }}</div>
        </form>
        <div id="noaccountbox">
          <router-link to="/signup"
            >Don&apos;t have an account? Sign Up here</router-link
          >
        </div>
      </div>
    </md-card>
  </div>
</template>

<script>
import firebase from "../../firebase";

export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async submit(event) {
      try {
        event.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>

<style>
#page {
  width: 100%;
  height: 100%;
  background-color: rgb(243, 239, 239);
}

#signincard {
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
}

#signinheader {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#signindivider {
  width: 100%;
}

#signinform {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

#signininput {
  margin-bottom: 50px;
}

#errormessage {
  color: red;
}

#signinbutton {
  width: 95%;
}

#noaccountbox {
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding-top: 20px;
}
</style>
