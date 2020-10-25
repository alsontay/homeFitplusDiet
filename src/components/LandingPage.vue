<template>
  <div>
    <div class="landing-page center">
      <section id="section">
        <section class="center">
          <div id="section-card">
            <mdb-row style="overflow-x: hidden">
              <mdb-col lg="5" id="title-image">
                <mdb-view src="/images/undraw_pilates_gpdb.svg" alt="Pilates" />
              </mdb-col>
              <mdb-col lg="7">
                <mdb-row>
                  <mdb-col col="3" lg="3" id="title">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      width="100%"
                      id="logo"
                    />
                  </mdb-col>
                  <mdb-col col="9" lg="9" id="title">
                    <h2 class="h2-responsive text-left">HOMEFIT+DIET</h2>
                    <h5 class="h5-responsive text-left text-muted">
                      Eat Fit, Keep Fit
                    </h5>
                  </mdb-col>
                </mdb-row>
                <mdb-row id="title-text">
                  <p class="text-justify">
                    We aim to help you achieve your goals in fitness and dieting
                    while you are stuck at home! Our fitness and diet plans are
                    crafted by an algorithm designed by professional coaches and
                    nutritionists. So if you stick to the plans, we guarantee
                    that you will see results!
                    <br /><br />
                    Happy EATING FIT and KEEPING FIT!
                  </p>
                </mdb-row>
                <mdb-row>
                  <mdb-col col="6" id="title-actions">
                    <mdb-btn
                      block
                      color="default"
                      @click.native="showSignup = true"
                    >
                      Sign Up
                    </mdb-btn>
                  </mdb-col>
                  <mdb-col col="6" id="title-actions">
                    <mdb-btn
                      block
                      color="default"
                      @click.native="showLogin = true"
                    >
                      Login
                    </mdb-btn>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>
          </div>
        </section>
      </section>
    </div>
    <form @submit="login">
      <mdb-modal
        full-height
        position="right"
        size="sm"
        :show="showLogin"
        @close="showLogin = false"
      >
        <mdb-modal-header>
          <mdb-modal-title>Login</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <div class="input-group" id="modal-input">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon">
                <mdb-icon far icon="envelope" />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              v-model="loginData.data.email"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon">
                <mdb-icon icon="lock" />
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="loginData.data.password"
            />
          </div>
        </mdb-modal-body>
        <mdb-modal-footer class="center">
          <div
            v-if="loginData.error"
            class="alert alert-danger"
            id="modal-input"
          >
            {{ loginData.error }}
          </div>
          <mdb-btn block color="default" type="submit">Login</mdb-btn>
          <mdb-btn
            block
            color="blue-grey"
            @click.native="showLogin = false"
            id="modal-close"
            >Close</mdb-btn
          >
        </mdb-modal-footer>
      </mdb-modal>
    </form>
    <form @submit="signUp">
      <mdb-modal
        full-height
        position="right"
        size="sm"
        :show="showSignup"
        @close="showSignup = false"
      >
        <mdb-modal-header>
          <mdb-modal-title>Sign Up</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <div class="input-group" id="modal-input">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon">
                <mdb-icon icon="user" />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Full Name"
              v-model="signupData.data.name"
            />
          </div>
          <div class="input-group" id="modal-input">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon">
                <mdb-icon far icon="envelope" />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              v-model="signupData.data.email"
            />
          </div>
          <div class="input-group" id="modal-input">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon">
                <mdb-icon icon="lock" />
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="signupData.data.password"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon">
                <mdb-icon icon="lock" />
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              v-model="signupData.data.cfmPassword"
            />
          </div>
        </mdb-modal-body>
        <mdb-modal-footer class="center">
          <div
            v-if="signupData.error"
            class="alert alert-danger"
            id="modal-input"
          >
            {{ signupData.error }}
          </div>
          <mdb-btn block color="default" type="submit">Sign Up</mdb-btn>
          <mdb-btn
            block
            color="blue-grey"
            @click.native="showSignup = false"
            id="modal-close"
            >Close</mdb-btn
          >
        </mdb-modal-footer>
      </mdb-modal>
    </form>
  </div>
</template>

<script>
import firebase from "../firebase";

export default {
  name: "LandingPage",
  components: {},
  data() {
    return {
      loginData: {
        data: {
          email: "",
          password: "",
        },
        error: null,
      },
      signupData: {
        data: {
          name: "",
          email: "",
          password: "",
          cfmPassword: "",
        },
        error: null,
      },
      showLogin: false,
      showSignup: false,
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();
      const { email, password } = this.loginData.data;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => (this.loginData.error = error.message));
    },
    async signUp(event) {
      event.preventDefault();
      const { name, email, password, cfmPassword } = this.signupData.data;
      if (name === "") return (this.signupData.error = "Please add your name");
      if (cfmPassword !== password)
        return (this.signupData.error = "Passwords do not match");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          data.user.updateProfile({ displayName: name }).then(() => {
            this.$router.push("/home");
          });
        })
        .catch((error) => (this.signupData.error = error.message));
    },
  },
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

#logo {
  margin: 15px;
  max-width: 100px;
}

#title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Caveat", cursive;
}

#title-image {
  padding: 20px;
}

#title-text {
  padding: 10px;
}

#title-actions {
  padding: 10px;
}

#modal-input {
  margin-bottom: 10px;
}

#modal-close {
  margin-top: 10px;
}
</style>
