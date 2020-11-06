<template>
  <div></div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import firebase from "../../firebase.js";
import breakfast from "../../assets/breakfast.json";
import lunchdinner from "../../assets/lunchdinner.json";

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
      bcalorie: breakfast,
      ldcalorie: lunchdinner,
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
    breakfastrequestStringMaker: function () {
      let curr = this.info.data;
      const age = this.dateDiffInYears(curr.dob, Date());
      var agegroup = "";
      if (age < 18) {
        agegroup = "agegroup1";
      } else if (age > 19 && age < 30) {
        agegroup = "agegroup2";
      } else if (age > 31 && age < 50) {
        agegroup = "agegroup3";
      } else {
        agegroup = "agegroup4";
      }
      const bmi = curr.weight / (curr.height * curr.height);
      const gender = curr.sex;
      var calorie = this.bcalorie[agegroup][gender];
      if (bmi > 25 || curr.goal == "loseweight") {
        calorie *= 0.8;
      }
      var restrictions = {};
      restrictions["maxCalories"] = calorie;
      const intolerance = curr.intolerance;
      var x;
      for (x of intolerance) {
        if (x == "none") {
          break;
        } else if (x == "diabetes") {
          restrictions["maxCarbs"] = restrictions["maxCalories"] * 0.6;
        } else if (x == "heart") {
          restrictions["maxCholesterol"] = 0;
          restrictions["maxSaturatedFat"] = 0;
        } else if (x == "hypertension") {
          restrictions["maxSodium"] = 0;
        } else if (x == "hypoglycemia") {
          restrictions["minCarbs"] = 150;
        }
      }

      const ingredientstring = ""; //from a previous form.toString()
      //get restrictions like diet, intolerance
      const finalstring = this.requeststring + "&number=6";
      return finalstring;
    },
    lunchrequestStringMaker: function () {
      let curr = this.info.data;
      const age = this.dateDiffInYears(curr.dob, Date());
      var agegroup = "";
      if (age < 18) {
        agegroup = "agegroup1";
      } else if (age > 19 && age < 30) {
        agegroup = "agegroup2";
      } else if (age > 31 && age < 50) {
        agegroup = "agegroup3";
      } else {
        agegroup = "agegroup4";
      }
      const bmi = curr.weight / (curr.height * curr.height);
      const gender = curr.sex;
      var calorie = this.ldcalorie[agegroup][gender];
      if (bmi > 25 || curr.goal == "loseweight") {
        calorie *= 0.8;
      }
      var restrictions = {};
      restrictions["maxCalories"] = calorie;
      const intolerance = curr.intolerance;
      var x;
      for (x of intolerance) {
        if (x == "none") {
          break;
        } else if (x == "diabetes") {
          restrictions["maxCalories"] = restrictions["maxCalories"] * 0.9;
          restrictions["maxCarbs"] = restrictions["maxCalories"] * 0.6;
        } else if (x == "heart") {
          restrictions["maxCholesterol"] = 0;
          restrictions["maxSaturatedFat"] = 0;
        } else if (x == "hypertension") {
          restrictions["maxSodium"] = 0;
          restrictions["minPotassium"] = 2;
        } else if (x == "hypotension") {
          restrictions["minSodium"] = 3;
        } else if (x == "osteoporosis") {
          restrictions["minCalcium"] = 1;
          restrictions["minVitaminD"] = 800 * 0.67; //IU to mg
        } else if (x == "anaemia") {
          restrictions["minIron"] = 60;
        } else if (x == "hypoglycemia") {
          restrictions["minCarbs"] = 150;
        }
      }
      const ingredientstring = ""; //from a previous form.toString()
      //get restrictions like diet, intolerance
      const finalstring = this.requeststring + "&number=6";
      return finalstring;
    },
    dinnerrequestStringMaker: function () {
      let curr = this.info.data;
      const age = this.dateDiffInYears(curr.dob, Date());
      var agegroup = "";
      if (age < 18) {
        agegroup = "agegroup1";
      } else if (age > 19 && age < 30) {
        agegroup = "agegroup2";
      } else if (age > 31 && age < 50) {
        agegroup = "agegroup3";
      } else {
        agegroup = "agegroup4";
      }
      const bmi = curr.weight / (curr.height * curr.height);
      const gender = curr.sex;
      var calorie = this.bcalorie[agegroup][gender];
      if (bmi > 25 || curr.goal == "loseweight") {
        calorie *= 0.8;
      }
      var restrictions = {};
      restrictions["maxCalories"] = calorie;
      const intolerance = curr.intolerance;
      var x;
      for (x of intolerance) {
        if (x == "none") {
          break;
        } else if (x == "diabetes") {
          restrictions["maxCalories"] = restrictions["maxCalories"] * 0.9;
          restrictions["maxCarbs"] = restrictions["maxCalories"] * 0.6;
        } else if (x == "heart") {
          restrictions["maxCholesterol"] = 0;
          restrictions["maxSaturatedFat"] = 0;
        } else if (x == "hypertension") {
          restrictions["maxSodium"] = 0;
          restrictions["minPotassium"] = 2;
        } else if (x == "hypotension") {
          restrictions["minSodium"] = 3;
        } else if (x == "osteoporosis") {
          restrictions["minCalcium"] = 1;
          restrictions["minVitaminD"] = 800 * 0.67; //IU to mg
        } else if (x == "anaemia") {
          restrictions["minIron"] = 60;
        } else if (x == "hypoglycemia") {
          restrictions["minCarbs"] = 150;
        }
      }
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
