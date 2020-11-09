<template>
  <div>
    <div class="home-page">
      <mdb-container>
        <mdb-row class="justify-content-center mt-5">
          <mdb-col>
            <h1>EAT FIT, KEEP FIT</h1>
            <mdb-row>
              <mdb-col>
                <p class="subheader">
                  COVID-19 has caused us to be stuck at home and limited our
                  physical activity and food options.
                  <br />
                  But fret not! <br />
                  Homefit+diet is here to help you EAT FIT and KEEP FIT, all
                  within the comforts of your own home!
                  <br />
                  Join us now! <br />
                </p>
              </mdb-col>
            </mdb-row>

            <mdb-row>
              <mdb-col>
                <i class="fas fa-angle-double-right"></i>
                <mdb-btn @click.native="showSignup = true" color="warning"
                  >START</mdb-btn
                >
                <i class="fas fa-angle-double-left"></i>
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

        <mdb-row>
          <mdb-col class="mt-5"> </mdb-col>
        </mdb-row>

        <mdb-row class="justify-content-center">
          <mdb-col>
            <h2>What We Offer <mdb-icon icon="check-double" /></h2>
            <p class="info">
              Trying to lose weight, keep fit, or eat healthy?<br />We provide
              you with the right features to reach your goals.
            </p>
          </mdb-col>
        </mdb-row>
        <mdb-row class="justify-content-center">
          <mdb-col lg="3">
            <mdb-icon
              icon="dumbbell"
              size="4x"
              class="teal-text mt-2 mr-4 ml-4 mb-2"
            />
            <mdb-row>
              <mdb-col>
                <p>Fitness plans crafted by professional fitness coaches</p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col lg="3">
            <mdb-icon
              icon="apple-alt"
              size="4x"
              class="teal-text mt-2 mr-4 ml-4 mb-2"
            />
            <mdb-row>
              <mdb-col>
                <p>Nutrition plans crafted by nutritionists</p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col lg="3">
            <mdb-icon
              icon="book"
              size="4x"
              class="teal-text mt-2 mr-4 ml-4 mb-2"
            />
            <mdb-row>
              <mdb-col>
                <p>
                  Healthy food recipes generated and customized to your tastes
                  and preferences
                </p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col class="mt-5"> </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col>
            <h2>User Stories</h2>
            <p>What our users say after using homefit+diet!</p>

            <mdb-row class="justify-content-center">
              <mdb-carousel
                :items="3"
                indicators
                indicatorsColor="secondary-color"
                slide
              >
                <template #[i+1] v-for="(item, i) in stories">
                  <mdb-card :key="i" class="w-50 text-center mx-auto p-2">
                    <mdb-row>
                      <mdb-card-image
                        :src="item.img"
                        class="img w-75 text-center mx-auto mt-2"
                      ></mdb-card-image>
                    </mdb-row>
                    <br />
                    <mdb-row>
                      <mdb-card-body color="warning">
                        <mdb-card-title class="black-text">{{
                          item.title
                        }}</mdb-card-title>
                        <mdb-card-text class="black-text"
                          ><mdb-icon icon="quote-left" size="3x" />
                          {{ item.text }}</mdb-card-text
                        >
                        <br />
                      </mdb-card-body>
                    </mdb-row>
                  </mdb-card>
                </template>
              </mdb-carousel>
            </mdb-row>
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col class="mt-5"> </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col>
            <h2>Food Gallery</h2>
            <p>Our users' very own healthy creations!</p>

            <mdb-row class="justify-content-center">
              <mdb-carousel
                :interval="8000"
                slide
                :items="foodGallery"
                controlls
                indicators
              ></mdb-carousel>
            </mdb-row>
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col class="mt-5"> </mdb-col>
        </mdb-row>
      </mdb-container>
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
  name: "HomePage",
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
      stories: [
        {
          title: "Trusted fitness & nutrition website",
          img: ["/images/User1.jpg"],
          text:
            "Homefit+diet provided me with fitness and nutrition plans to stay healthy during the circuit breaker period!",
        },
        {
          title: "Trusted fitness & nutrition website",
          img: ["/images/User2.jpg"],
          text:
            "Homefit+diet provided me with fitness and nutrition plans to stay healthy during the circuit breaker period!",
        },
        {
          title: "Trusted fitness & nutrition website",
          img: ["/images/User3.jpg"],
          text:
            "Homefit+diet provided me with fitness and nutrition plans to stay healthy during the circuit breaker period!",
        },
      ],
      foodGallery: [
        {
          img: true,
          src:
            "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
          mask: "black-slight",
        },
        {
          img: true,
          src:
            "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg",
          mask: "black-slight",
        },
        {
          img: true,
          src:
            "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg",
          mask: "black-slight",
        },
        {
          img: true,
          src: "/images/food4.jpg",
          mask: "black-slight",
        },
        {
          img: true,
          src: "/images/food5.jpg",
          mask: "black-slight",
        },
        {
          img: true,
          src: "/images/food6.jpg",
          mask: "black-slight",
        },
      ],
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
.subheader {
  font-size: 18pt;
  font-family: calibri;
}

.btn {
  font-size: 20pt;
  font-family: roboto;
  color: white;
  padding-left: 30pt;
  padding-right: 30pt;
}

h2 {
  font-size: 30pt;
  font-family: Impact;
  margin-top: 50pt;
}

h1 {
  font-size: 100pt;
  font-family: Impact;
}

#modal-input {
  margin-bottom: 10px;
}

#modal-close {
  margin-top: 10px;
}

.lgnbtn {
  color: blue;
  font-size: 12pt;
  padding-right: 0;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
