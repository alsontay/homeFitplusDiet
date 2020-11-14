<template>
  <mdb-container class="test">
    <mdb-container class="mt-5 mb-5 test">
      <h2>Calorie Tracker</h2>
      <h3 id="title">
        Keep track of your other untracked calorie intakes here!
      </h3>
    </mdb-container>
    <mdb-container
      class="mt-4 test d-flex flex-column align-items-center justify-content-center"
    >
      <mdb-row>
        <mdb-card class="p-4 pl-5 pr-5 mb-5" id="selectioncard">
          <mdb-row class="d-flex justify-content-center mb-3">
            <div>
              <label id="label-text">Breakfast</label>
              <mdb-input type="number" v-model="calcount.data.values.bfast" />

              <label id="label-text">Lunch</label>
              <mdb-input type="number" v-model="calcount.data.values.lunch" />

              <label id="label-text">Dinner</label>
              <mdb-input type="number" v-model="calcount.data.values.dinnr" />

              <label id="label-text">Other (Snacks etc.)</label>
              <mdb-input type="number" v-model="calcount.data.values.othr" />

              <label id="label-text"> Calories Burnt (Exercise) </label>
              <mdb-input type="number" v-model="calcount.data.expend" />
            </div>
          </mdb-row>

          <h5 id="label-text">Date of logging</h5>

          <div class="col-lg-2">
            <input
              class="form-control"
              type="date"
              min="1940-01-01"
              v-model="calcount.data.date"
              style="width: 370px"
            />
          </div>
          <br />
        </mdb-card>
      </mdb-row>
      <mdb-row>
        <mdb-btn
          color="default"
          size="lg"
          class="ml-3"
          v-on:click="updateInformation"
        >
          <b>Track</b>
        </mdb-btn>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbInput } from "mdbvue";
import { mapGetters } from "vuex";
import firebase from "../firebase.js";
import store from "../store.js";

export default {
  name: "CalorieTrackerPage",
  components: {
    mdbInput,
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  data() {
    return {
      calcount: {
        data: {
          values: {
            bfast: 0,
            lunch: 0,
            dinnr: 0,
            othr: 0,
          },
          date: "",
          expend: 0,
        },
      },
    };
  },
  methods: {
    async updateInformation() {
      const userid = this.user.data.id;
      var update = {};
      update[`${this.calcount.data.date}.consume`] = this.calcount.data.values;
      const db = firebase.firestore().collection("calories").doc(userid);
      const db2 = await db.get();
      if (db2.exists) {
        db.update(update);
      } else {
        var update2 = {};
        update2[`${this.calcount.data.date}`] = {
          consume: this.calcount.data.values,
        };
        db.set(update2);
      }
      alert("Calorie Counts Updated!");
    },
  },
  mounted() {
    // Automatically sets the calender date to today
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    this.calcount.data.date = today;
    // Sets Existing DB data to the fields
    var docRef = firebase
      .firestore()
      .collection("calories")
      .doc(this.user.data.id);
    let curr = this.calcount.data;
    docRef.get().then(function (doc) {
      if (doc.exists) {
        var db = doc.data()[`${today}`].consume;
        curr.values.bfast = db.bfast;
        curr.values.lunch = db.lunch;
        curr.values.dinnr = db.dinnr;
        curr.values.othr = db.othr;
        var db2 = doc.data()[`${today}`].expend;
        curr.expend = db2;
      }
    });
    //console.log(curr);
  },
};
</script>

<style scoped>
#title {
  font-family: "Caveat", cursive;
}

#selectioncard {
  width: 500px;
}

#helpertext {
  color: gray;
}
#label-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Caveat", cursive;
  font-size: 30px;
}
</style>
