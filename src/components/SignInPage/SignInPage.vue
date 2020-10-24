<template>
  <div id="page">
    <md-card id="signincard">
      <div id="signinheader">
        <md-avatar class="md-avatar-icon md-primary" id="signinicon">
          <md-icon>lock_open</md-icon> </md-avatar
        ><br />
        <span class="md-display-1">Sign In</span>
      </div>
      <md-divider id="signindivider"></md-divider>
      <div id="signinform">
        <form>
          <md-field>
            <label>Email</label>
            <md-input v-model="initial"></md-input>
          </md-field>
          <md-field id="signininput">
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
          <md-button class="md-raised md-primary" id="signinbutton">
            Sign In
          </md-button>
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
export default {
  name: "SignInPage",
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
}

#signinicon {
  margin-bottom: 10px;
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
