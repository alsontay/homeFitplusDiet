<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-lg-8 order-lg-2">
        <ul id="mytabs" class="nav nav-tabs">
          <li class="nav-item">
            <a
              href=""
              data-target="#profile"
              data-toggle="tab"
              class="nav-link active"
              >Profile</a
            >
          </li>
          <li class="nav-item">
            <a href="" data-target="#update" data-toggle="tab" class="nav-link"
              >Update Profile</a
            >
          </li>
          <li class="nav-item">
            <a href="" data-target="#account" data-toggle="tab" class="nav-link"
              >Account Settings</a
            >
          </li>
        </ul>
        <div class="tab-content py-4">
          <div class="tab-pane active" id="profile">
            <h5 class="mb-3">Personal Information</h5>
            <div class="row">
              <div class="col-md-6">
                <h6>About</h6>
                <p>HomeFit+Diet User!</p>
                <h6>Hobbies</h6>
                <p>
                  Indie music, skiing and hiking. I love the great outdoors.
                </p>
                <h6>Full Name</h6>
                <p>{{ info.data.name }}</p>
              </div>
            </div>
            <!--/row-->
          </div>
          <div class="tab-pane" id="update">
            <form role="form">
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Full Name</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="text"
                    v-model="info.data.name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Email</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="email"
                    v-model="info.data.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Sex</label
                >
                <div class="col-lg-9">
                  <select
                    id="form-control"
                    class="form-control"
                    size="0"
                    v-model="info.data.sex"
                  >
                    <option value="Male" id="male">Male</option>
                    <option value="Female" id="female">Female</option>
                    <option value="NIL" id="prefernottosay">
                      Prefer Not to Answer
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Date of Birth</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="date"
                    min="1940-01-01"
                    v-model="info.data.dob"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Weight(kg)</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="number"
                    min="0"
                    max="200"
                    v-model="info.data.weight"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Height(cm)</label
                >
                <div class="col-lg-9">
                  <input
                    class="form-control"
                    type="number"
                    min="80"
                    max="250"
                    v-model="info.data.height"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Goals</label
                >
                <div class="col-lg-9">
                  <select
                    id="form-control"
                    class="form-control"
                    size="0"
                    v-model="info.data.goal"
                  >
                    <option value="fithealthy">
                      Keep Fit and Live Healthy
                    </option>
                    <option value="loseweight">Lose Weight</option>
                    <option value="muscles">Build Muscles</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Diet Type</label
                >
                <div class="col-lg-9">
                  <select
                    id="form-control"
                    class="form-control"
                    size="0"
                    v-model="info.data.diet"
                  >
                    <option value="nopreference">No Preference</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="pescretarian">Pescretarian</option>
                    <option value="paleo">Paleo</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Allergies</label
                >
                <div class="col-lg-9">
                  <div class="checkboxes">
                    <input
                      type="checkbox"
                      id="none"
                      name="none"
                      value="none"
                      v-model="info.data.intolerance"
                    />
                    <label for="none"> None</label>
                    <input
                      type="checkbox"
                      id="diary"
                      name="diary"
                      value="diary"
                      v-model="info.data.intolerance"
                    />
                    <label for="diary"> Dairy </label>
                    <input
                      type="checkbox"
                      id="nuts"
                      name="nuts"
                      value="nuts"
                      v-model="info.data.intolerance"
                    />
                    <label for="nuts"> Nuts</label>
                    <input
                      type="checkbox"
                      id="soy"
                      name="soy"
                      value="soy"
                      v-model="info.data.intolerance"
                    />
                    <label for="soy"> Soy</label><br />
                    <input
                      type="checkbox"
                      id="egg"
                      name="egg"
                      value="egg"
                      v-model="info.data.intolerance"
                    />
                    <label for="egg"> Egg </label>
                    <input
                      type="checkbox"
                      id="seafood"
                      name="seafood"
                      value="seafood"
                      v-model="info.data.intolerance"
                    />
                    <label for="seafood"> Seafood</label>
                    <input
                      type="checkbox"
                      id="shellfish"
                      name="shellfish"
                      value="shellfish"
                      v-model="info.data.intolerance"
                    />
                    <label for="seafood"> Shellfish</label>
                    <input
                      type="checkbox"
                      id="gluten"
                      name="gluten"
                      value="gluten"
                      v-model="info.data.intolerance"
                    />
                    <label for="gluten"> Gluten</label>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"
                  >Existing Conditions</label
                >
                <div class="col-lg-9">
                  <div class="checkboxes">
                    <input
                      type="checkbox"
                      id="none"
                      name="none"
                      value="none"
                      v-model="info.data.condition"
                    />
                    <label for="none"> None </label>
                    <input
                      type="checkbox"
                      id="diabetes"
                      name="diabetes"
                      value="diabetes"
                      v-model="info.data.condition"
                    />
                    <label for="diabetes"> Diabetes mellitus </label>
                    <input
                      type="checkbox"
                      id="hypoglycemia"
                      name="hypoglycemia"
                      value="hypoglycemia"
                      v-model="info.data.condition"
                    />
                    <label for="hypoglycemia"> Hypoglycemia </label><br />
                    <input
                      type="checkbox"
                      id="heart"
                      name="heart"
                      value="heart"
                      v-model="info.data.condition"
                    />
                    <label for="heart"> Heart Disease/Hyperlipidaemia </label
                    ><br />
                    <input
                      type="checkbox"
                      id="hypertension"
                      name="hypertension"
                      value="hypertension"
                      v-model="info.data.condition"
                    />
                    <label for="hypertension"> Hypertension </label>
                    <input
                      type="checkbox"
                      id="hypotension"
                      name="hypotension"
                      value="hypotension"
                      v-model="info.data.condition"
                    />
                    <label for="hypotension"> Hypotension </label>
                    <input
                      type="checkbox"
                      id="osteoporosis"
                      name="osteoporosis"
                      value="osteoporosis"
                      v-model="info.data.condition"
                    />
                    <label for="osteoporosis"> Osteoporosis </label>
                    <input
                      type="checkbox"
                      id="anaemia"
                      name="anaemia"
                      value="anaemia"
                      v-model="info.data.condition"
                    />
                    <label for="anaemia"> Anaemia </label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  class="col-lg-3 col-form-label form-control-label"
                ></label>
                <div class="col-lg-9">
                  <input
                    type="reset"
                    class="btn btn-secondary"
                    value="Cancel"
                  />
                  <input
                    type="button"
                    class="btn btn-primary"
                    v-on:click.prevent.once="updateInformation"
                    value="Save Changes"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="tab-pane" id="account"></div>
        </div>
      </div>
      <div class="col-lg-4 order-lg-1 text-center">
        <img
          src="//placehold.it/150"
          class="mx-auto img-fluid img-circle d-block"
          alt="avatar"
        />
        <h6 class="mt-2">Upload a different photo</h6>
        <label class="custom-file">
          <input type="file" id="file" class="custom-file-input" />
          <span class="custom-file-control">Choose file</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "../firebase.js";
import $ from "jquery";

export default {
  name: "ProfilePage",
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  data() {
    return {
      info: {
        data: {
          name: "",
          email: "",
          sex: "",
          dob: "",
          weight: "",
          height: "",
          goal: "",
          diet: "",
          intolerance: [],
          condition: [],
        },
      },
    };
  },
  methods: {
    updateInformation: function () {
      const userid = this.user.data.id;
      console.log(userid);
      console.log(this.info.data);
      firebase.firestore().collection("users").doc(userid).set(this.info.data);
    },
  },
  mounted() {
    var docRef = firebase
      .firestore()
      .collection("users")
      .doc(this.user.data.id);
    let curr = this.info.data;
    docRef.get().then(function (doc) {
      if (doc.exists) {
        var db = doc.data();
        curr.name = db.name;
        curr.email = db.email;
        curr.sex = db.sex;
        curr.dob = db.dob;
        curr.height = db.height;
        curr.weight = db.weight;
        curr.goal = db.goal;
        curr.diet = db.diet;
        curr.intolerance = db.intolerance;
        curr.condition = db.condition;
        //console.log(curr)
      }
    });
    console.log(curr);
  },
};
</script>

<style scoped>
.checkboxes {
  text-align: left;
}
.checkboxes input {
  margin: 0px 0px 0px 0px;
}

.checkboxes label {
  margin: 0px 20px 0px 3px;
}
</style>
