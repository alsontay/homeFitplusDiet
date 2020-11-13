<template>
  <mdb-container class="test">
    <mdb-container class="mt-5 mb-5 test">
      <h2>Menu</h2>
    </mdb-container>
    <mdb-container
      class="mt-4 test d-flex flex-column align-items-center justify-content-center"
    >
      <mdb-row>
        <mdb-card class="p-4 pl-5 pr-5 mb-5" id="selectioncard">
          <mdb-row class="d-flex justify-content-center mb-3">
            <h5>What meal are you having?</h5>
            <mdb-btn-group size="lg">
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectMeal('breakfast')"
                :active="meal === 'breakfast'"
                >Breakfast</mdb-btn
              >
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectMeal('lunch')"
                :active="meal === 'lunch'"
                >Lunch</mdb-btn
              >
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectMeal('dinner')"
                :active="meal === 'dinner'"
                >Dinner</mdb-btn
              >
            </mdb-btn-group>
          </mdb-row>
          <mdb-row class="d-flex justify-content-center align-items-center mb-3"
            ><h5>What cuisine would you like?</h5>
            <select class="custom-select" v-model="cuisine">
              <option v-for="cusine in cusines" v-bind:key="cusine">
                {{ cusine }}
              </option>
            </select>
          </mdb-row>
          <h5>List your available ingredients here!</h5>
          <mdb-row class="d-flex justify-content-between align-items-center">
            <div>
              <select v-model="ingredient" class="custom-select">
                <option
                  v-for="ingredient in ingredients"
                  v-bind:key="ingredient"
                >
                  {{ ingredient }}
                </option>
              </select>
            </div>
            <mdb-btn color="default" class="ml-3" @click="selectIngredient">
              Add
            </mdb-btn>
          </mdb-row>
        </mdb-card>
      </mdb-row>
      <mdb-row>
        <mdb-card class="pt-4 pb-2 pl-5 pr-5 mb-5" id="selectioncard">
          <mdb-tbl hover class="mb-3">
            <mdb-tbl-head>
              <tr>
                <th><b>Selected Ingredients</b></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
              <tr
                v-for="ingredient in selectedIngredients"
                v-bind:key="ingredient"
                @click="removeIngredient(ingredient)"
              >
                <td>{{ ingredient }}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
          <p id="helpertext">
            <small>Click on the ingredient to remove it from the list</small>
          </p>
        </mdb-card>
      </mdb-row>
      <mdb-row>
        <router-link to="/MenuSelection">
          <mdb-btn
            color="default"
            size="lg"
            class="ml-3"
            v-on:click="storeIngredients"
          >
            <b>Generate Menu</b>
          </mdb-btn>
        </router-link>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import store from "../store.js";
import cusines from "../assets/cusine.json";
import ingredients from "../assets/ingredients.json";

export default {
  name: "MenuPage",
  data() {
    return {
      meal: "",
      cusines,
      cuisine: "",
      ingredients,
      ingredient: "",
      selectedIngredients: [],
    };
  },
  methods: {
    selectMeal(meal) {
      this.meal = meal;
    },
    selectIngredient() {
      if (
        this.ingredient.trim() === "" ||
        !this.ingredients.find((x) => x === this.ingredient) ||
        !!this.selectedIngredients.find((x) => x === this.ingredient)
      )
        return;
      this.selectedIngredients.push(this.ingredient);
      this.ingredient = "";
    },
    removeIngredient(ingredient) {
      this.selectedIngredients = this.selectedIngredients.filter(
        (x) => x !== ingredient
      );
    },
    storeIngredients() {
      store.commit("SET_MEAL_TYPE", this.meal);
      store.commit("SET_MEAL_LIST", this.selectedIngredients);
      store.commit("SET_MEAL_CUISINE", this.cuisine);
      //console.log("hello");
    },
  },
};
</script>

<style scoped>
/* .test {
  border: 1px transparent;
} */

#selectioncard {
  width: 500px;
}

#helpertext {
  color: gray;
}
</style>
