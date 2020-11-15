<template>
  <div>
    <menuView v-bind:recipes="recipes"></menuView>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import store from "../../store.js";
import firebase from "../../firebase.js";
import breakfast from "../../assets/breakfast.json";
import lunchdinner from "../../assets/lunchdinner.json";
import MenuView from "./MenuView.vue";

export default {
  components: {
    menuView: MenuView,
  },
  computed: {
    ...mapGetters({
      user: "user",
      mealRequest: "meals",
    }),
  },
  data() {
    return {
      requeststring:
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=44f8119c2d3f4bbe84ac623d9d434620",
      bcalorie: breakfast,
      ldcalorie: lunchdinner,
      recipes: null,
      mealtype: "", //from form
      ingredients: ["egg"], //from form
      cuisine: "", //from form
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
    brequestStringMaker: function () {
      let curr = this.info.data;
      const condition = curr.condition;
      const dob = curr.dob;
      const age =
        (new Date() -
          new Date(dob.slice(0, 4), dob.slice(5, 7), dob.slice(8, 10))) /
        (1000 * 60 * 60 * 24 * 365);
      const category = age < 18 ? 1 : age < 30 ? 2 : age < 50 ? 3 : 4;
      const ageGroup = "agegroup" + category.toString();
      const bmi = curr.weight / ((curr.height / 100) * (curr.height / 100));
      const gender = curr.sex;
      var calorie = this.bcalorie[ageGroup][gender];
      calorie = bmi > 25 || curr.goal == "loseweight" ? calorie * 0.8 : calorie; //20% less calories if overweight or goal is to loseweight
      var restrictions = { maxCalories: calorie };
      for (let x of condition) {
        //restrictions accumulate according to the conditions the user have
        if (x == "none") {
          break;
        } else if (x == "diabetes") {
          restrictions["maxCarbs"] = restrictions["maxCalories"] * 0.6;
        } else if (x == "heart") {
          restrictions["maxCholesterol"] = 20;
          restrictions["maxSaturatedFat"] = Math.round(
            restrictions["maxCalories"] * 0.04
          );
        } else if (x == "hypertension") {
          restrictions["maxSodium"] = 0;
        } else if (x == "hypoglycemia") {
          restrictions["minCarbs"] = 150;
        }
      }
      var ingredientstring = "&includeIngredients=";
      for (let ingred of this.ingredients) {
        ingredientstring += ingred.replace(/\s/g, "%20").toLowerCase();
      }
      var dietarystring = "";
      if (this.cuisine != "No Preference") {
        dietarystring =
          dietarystring + "&cuisine=" + this.cuisine.toLowerCase();
      }
      if (curr.diet != "nopreference") {
        dietarystring = dietarystring + "&diet=" + curr.diet;
      }
      if (curr.intolerance.indexOf("none") == -1) {
        dietarystring =
          dietarystring + "&intolerance=" + curr.intolerance.toString();
      }
      var restrictionstring = "";
      for (let k in restrictions) {
        restrictionstring =
          restrictionstring +
          "&" +
          k.toString() +
          "=" +
          restrictions[k].toString();
      }
      var offsetNumber = 0;
      if (this.ingredients.length == 0 && this.cuisine == "No Preference") {
        offsetNumber = Math.floor(Math.random() * 100);
      }
      const infostring =
        "&number=3" +
        "&offset=" +
        offsetNumber.toString() +
        "&type=breakfast,bread,salad" +
        "&instructionsRequired=true" +
        "&addRecipeInformation=true" +
        "&addRecipeNutrition=true";
      const finalstring =
        this.requeststring +
        infostring +
        ingredientstring +
        dietarystring +
        restrictionstring;
      console.log(finalstring);
      return finalstring;
    },
    ldrequestStringMaker: function () {
      let curr = this.info.data;
      const condition = curr.condition;
      const dob = curr.dob;
      const age =
        (new Date() -
          new Date(dob.slice(0, 4), dob.slice(5, 7), dob.slice(8, 10))) /
        (1000 * 60 * 60 * 24 * 365);
      const category = age < 18 ? 1 : age < 30 ? 2 : age < 50 ? 3 : 4;
      const ageGroup = "agegroup" + category.toString();
      const bmi = curr.weight / ((curr.height / 100) * (curr.height / 100));
      const gender = curr.sex;
      var calorie = this.ldcalorie[ageGroup][gender];
      calorie = bmi > 25 || curr.goal == "loseweight" ? calorie * 0.8 : calorie; //20% less calories if overweight or goal is to loseweight
      var restrictions = { maxCalories: calorie };
      for (let x of condition) {
        //restrictions accumulate according to the conditions the user have
        if (x == "none") {
          break;
        } else if (x == "diabetes") {
          restrictions["maxCalories"] = restrictions["maxCalories"] * 0.9;
          restrictions["maxCarbs"] = restrictions["maxCalories"] * 0.6;
        } else if (x == "heart") {
          restrictions["maxCholesterol"] = 100;
          restrictions["maxSaturatedFat"] = Math.round(
            restrictions["maxCalories"] * 0.04
          );
        } else if (x == "hypertension") {
          restrictions["maxSodium"] = 1;
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
      var ingredientstring = "&includeIngredients=";
      for (let ingred of this.ingredients) {
        ingredientstring += ingred.replace(/\s/g, "%20").toLowerCase();
      }
      var dietarystring = "";
      if (this.cuisine != "No Preference") {
        dietarystring =
          dietarystring + "&cuisine=" + this.cuisine.toLowerCase();
      }
      if (curr.diet != "nopreference") {
        dietarystring = dietarystring + "&diet=" + curr.diet;
      }
      if (curr.intolerance.indexOf("none") == -1) {
        dietarystring =
          dietarystring + "&intolerance=" + curr.intolerance.toString();
      }
      var restrictionstring = "";
      for (let k in restrictions) {
        restrictionstring =
          restrictionstring +
          "&" +
          k.toString() +
          "=" +
          restrictions[k].toString();
      }
      var offsetNumber = 0;
      if (this.mealtype == "dinner") {
        offsetNumber = Math.floor(Math.random() * 3);
      }
      if (this.ingredients.length == 0 && this.cuisine == "No Preference") {
        offsetNumber = Math.floor(Math.random() * 800);
      }
      const infostring =
        "&number=3" +
        "&offset=" +
        offsetNumber.toString() +
        "&type=main%20course,side%20dish,soup" +
        "&instructionsRequired=true" +
        "&addRecipeInformation=true" +
        "&addRecipeNutrition=true";
      const finalstring =
        this.requeststring +
        infostring +
        ingredientstring +
        dietarystring +
        restrictionstring;
      console.log(finalstring);
      return finalstring;
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
        //console.log(curr);
      }
    });
    setTimeout(() => {
      var finalrequeststring =
        this.mealtype == "breakfast"
          ? this.brequestStringMaker()
          : this.ldrequestStringMaker();

      axios.get(finalrequeststring).then((response) => {
        console.log("Response==>");
        console.log(response);
        this.recipes = response.data.results;
        console.log("Links==>");
        console.log(this.recipes);
      });
    }, 1000);

    // Assigns computed store values to the vue page.
    this.mealtype = this.mealRequest.choice;
    this.ingredients = this.mealRequest.ingredients;
    this.cuisine = this.mealRequest.cuisine;
  },
};
</script>
<style scoped></style>
