<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import firebase from "../../firebase.js";

export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  data() {
    return {
      APIKEY: "44f8119c2d3f4bbe84ac623d9d434620",
      requeststring:
        "https://api.spoonacular.com/recipes/complexSearch" +
        "?apiKey=" +
        this.APIKEY,
      recipes: [],
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
    requestStringMaker: function () {
      let curr = this.info.data;
      const age = this.dateDiffInYears(curr.dob, Date());
      const bmi = curr.weight / (curr.height * curr.height);

      const ingredientstring = ""; //from a previous form.toString()
      //get restrictions like diet, intolerance
      const finalstring = this.requeststring + "&number=6";
      return finalstring;
    },
    dateDiffInYears: function (dateold, datenew) {
      var ynew = datenew.getFullYear();
      var mnew = datenew.getMonth();
      var dnew = datenew.getDate();
      var yold = dateold.getFullYear();
      var mold = dateold.getMonth();
      var dold = dateold.getDate();
      var diff = ynew - yold;
      if (mold > mnew) diff--;
      else {
        if (mold == mnew) {
          if (dold > dnew) diff--;
        }
      }
      return diff;
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
    axios.get(this.requestStringMaker()).then((response) => {
      console.log("Response==>");
      console.log(response);
      this.recipes = response.data.results;
      console.log("Links==>");
      console.log(this.recipes);
    });
  },
};
</script>
<style scoped></style>
