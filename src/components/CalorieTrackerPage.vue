<template>
  <div>
    <mdb-row id="title-text">
      <p>
        CALORIE TRACKER <br />
        Keep track of your calorie count here!
      </p>
    </mdb-row>
    <div id="inputfields">
      <label id="label-text">Breakfast</label>
      <mdb-input type="number" v-model="calcount.data.values.bfast" />

      <label id="label-text">Lunch</label>
      <mdb-input type="number" v-model="calcount.data.values.lunch" />

      <label id="label-text">Dinner</label>
      <mdb-input type="number" v-model="calcount.data.values.dinnr" />
    </div>
    <div class="form-group row" id="inputfields">
      <label id="label-text">Date of Logging</label>
      <div class="col-lg-2">
        <input
          class="form-control"
          type="date"
          min="1940-01-01"
          v-model="calcount.data.date"
        />
      </div>
    </div>
    <div id="buttonstyle">
      <mdb-btn
        block
        color="default"
        type="submit"
        v-on:click="updateInformation()"
        >Submit</mdb-btn
      >
    </div>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
import { mapGetters } from "vuex";
import firebase from "../firebase.js";

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
          },
          date: "",
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
      }
    });
    //console.log(curr);
  },
};
</script>

<style scoped>
.test {
  border: 1px solid black;
}

#buttonstyle {
  width: 10%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

#inputfields {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#label-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Caveat", cursive;
  font-size: 30px;
}

#title-text {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Caveat", cursive;
  font-size: 50px;
}
</style>
