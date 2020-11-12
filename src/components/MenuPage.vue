<template>
  <div class="autocomplete">
    <input
      id="textbox"
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      autocomplete="off"
    />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="isLoading">Loading results...</li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
    <mdb-btn type="submit" @click="onSubmit" color="default">Submit</mdb-btn>
    <br />
    {{ selectedIngred }}
    <br />

    <router-link to="/MenuSelection"><button>GO TO MENU</button></router-link>
  </div>
</template>

<script>
// import Recipes from "./APIs/recipes.vue";
import ingredients from "../assets/new_ingredients.json";

export default {
  name: "MenuPage",
  // components: {
  //   "app-recipes": Recipes
  // },

  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: 0,
      items: ingredients,
      selectedIngred: [],
    };
  },

  methods: {
    onChange() {
      this.$emit("input", this.search);

      if (this.isAsync) {
        this.isLoading = true;
      } else {

        this.filterResults();
        this.isOpen = true;
      }
    },

    filterResults() {

      this.results = this.items.filter((item) => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      // if not pointing to autocomplete, don't do anything to search input
      if (!this.results[this.arrowCounter]) return;
      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    onSubmit() {
      if (this.search == "") return;
      this.selectedIngred.push(this.search);
      this.search = "";
      console.log(this.selectedIngred);
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
  },
  watch: {
    items: function (val, oldValue) {
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
#textbox {
  padding: 10px;
  margin-top: 20px;
  height: 50px;
  width: 300px;
}
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
