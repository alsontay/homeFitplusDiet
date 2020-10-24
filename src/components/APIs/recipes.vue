<template>
<div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      APIKEY: "44f8119c2d3f4bbe84ac623d9d434620",
      requeststring:
        "https://api.spoonacular.com/recipes/complexSearch" +
        "?apiKey=" +
        this.APIKEY,
      recipes: [],
    };
  },
  methods: {
    requestStringMaker: function () {
      const ingredientstring = ""; //from a previous form.toString()
      //get restrictions like diet, intolerance
      const finalstring = this.requeststring + "&number=6";
      return finalstring;
    },
  },
  mounted() {
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
