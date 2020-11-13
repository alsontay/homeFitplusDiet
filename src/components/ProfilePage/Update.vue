<template>
  <mdb-container class="pb-2 test">
    <h5 class="m-4">Update Profile</h5>
    <mdb-container class="mt-6 p-2 test">
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
              disabled="disabled"
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
              disabled="disabled"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-lg-3 col-form-label form-control-label">Sex</label>
          <div class="col-lg-9">
            <select
              id="form-control"
              class="form-control"
              size="0"
              v-model="info.data.sex"
            >
              <option value="M" id="male">Male</option>
              <option value="F" id="female">Female</option>
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
            >Weight (kg)</label
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
            >Height (cm)</label
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
              <option value="fithealthy">Eat Fit, Keep Fit</option>
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
              <label for="heart"> Heart Disease/Hyperlipidaemia </label><br />
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
              <label for="hypotension"> Hypotension </label> <br />
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
          <div class="col-lg-12 d-flex justify-content-end">
            <input
              type="button"
              class="btn btn-default"
              v-on:click.prevent.once="updateInformation"
              value="Save Changes"
            />
          </div>
        </div>
      </form>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "../../firebase.js";

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
      firebase
        .firestore()
        .collection("userinfo")
        .doc(userid)
        .set(this.info.data);
      alert("User profile information updated!");
    },
  },
  mounted() {
    var docRef = firebase
      .firestore()
      .collection("userinfo")
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

.test {
  border: 1px solid white;
}
</style>
