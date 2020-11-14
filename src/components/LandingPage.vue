<template>
  <div class="landing-page center">
    <div class="landing-page center" style="height: 100%">
      <div class="rgba-grey-slight py-4 px-4">
        <div class="rgba-teal-slight py-5 px-4">
          <section id="section">
            <section class="center">
              <div id="section-card">
                <mdb-row style="overflow-x: hidden">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    width="100%"
                    height="100%"
                    id="logo"
                  />
                  <mdb-col id="title">
                    <h2 class="h2-responsive justify-content-center">
                      HOMEFIT+DIET
                    </h2>
                    <h5 class="h5-responsive justify-content-center text-muted">
                      Eat Fit, Keep Fit
                    </h5>
                  </mdb-col>
                </mdb-row>
                <mdb-row style="overflow-x: hidden">
                  <mdb-col lg="6" id="title-image">
                    <mdb-view
                      src="/images/undraw_pilates_gpdb.svg"
                      alt="Pilates"
                    />
                  </mdb-col>
                  <mdb-col lg="6">
                    <mdb-row id="title-text">
                      <p class="subheader">
                        COVID-19 has caused us to be stuck at home and limited
                        our physical activity and food options.
                        <br />
                        But fret not! <br />
                        Homefit+diet is here to help you EAT FIT and KEEP FIT,
                        all within the comforts of your own home!
                        <br />
                        Join us now! <br />
                      </p>
                    </mdb-row>
                    <mdb-row>
                      <mdb-col>
                        <mdb-btn
                          class="stbtn"
                          @click.native="showSignup = true"
                          color="default"
                          >START</mdb-btn
                        >
                        <p>
                          Already have an account?
                          <mdb-btn
                            @click.native="showLogin = true"
                            class="lgnbtn"
                            color=""
                            >Login</mdb-btn
                          >
                        </p>
                      </mdb-col>
                    </mdb-row>
                  </mdb-col>
                </mdb-row>
              </div>
              <div class="footer-copyright text-center py-3">
                <mdb-container fluid class="fixed-bottom">
                  &copy; 2020 Goal Diggers
                </mdb-container>
              </div>
            </section>
          </section>
        </div>
      </div>
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
          this.$router.push(this.$route.query.redirect || "/home");
        })
        .catch((error) => (this.loginData.error = error.message));
    },
    async signUp(event) {
      event.preventDefault();
      const { name, email, password, cfmPassword } = this.signupData.data;
      if (name === "") return (this.signupData.error = "Please type your name");
      if (cfmPassword !== password)
        return (this.signupData.error = "Passwords do not match");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          data.user.updateProfile({ displayName: name }).then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(data.user.uid)
              .set(
                {
                  name,
                  email,
                },
                { merge: true }
              )
              .then(() =>
                this.$router.push(this.$route.query.redirect || "/profile")
              );
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

h2 {
  font-size: 60pt;
}

h5 {
  font-size: 30pt;
}

#section {
  padding: 10px;
  max-width: 1200px;
}

.stbtn {
  font-size: 20pt;
  font-family: roboto;
  color: white;
  padding-left: 30pt;
  padding-right: 30pt;
}

.lgnbtn {
  color: blue;
  font-size: 12pt;
  padding-right: 0;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
}

#section-card {
  padding: 15px;
  max-width: 90%;
}

#logo {
  margin: 0px;
  max-width: 130px;
}

#title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Caveat", cursive;
}

#title-image {
  padding: 10px;
}

#title-text {
  padding: 10px;
  margin-top: 100px;
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

.fixed-bottom {
  background-color: rgb(243, 239, 239);
  width: 100%;
  bottom: 0;
}
</style>
