import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    meals: {
      choice: null, // breakfast, lunch, dinner
      ingredients: null,
      cuisine: null,
    },
    exercise: {
      equipments: null,
      intensity: null,
    },
    jsons: {
      exerciseJson: null,
      recipieJson: null,
    },
    calStorage: {
      tempCalIn: null,
      tempCalOut: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    meals(state) {
      return state.meals;
    },
    exercise(state) {
      return state.exercise;
    },
    jsons(state) {
      return state.jsons;
    },
    calStorage(state) {
      return state.calStorage;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_MEAL_TYPE(state, mealtime) {
      state.meals.choice = mealtime;
    },
    SET_MEAL_LIST(state, list) {
      state.meals.ingredients = list;
    },
    SET_MEAL_CUISINE(state, cuisine) {
      state.meals.cuisine = cuisine;
    },
    SET_EX_INT(state, intensity) {
      state.exercise.intensity = intensity;
    },
    SET_EX_EQM(state, equipments) {
      state.exercise.equipments = equipments;
    },
    SET_MEAL_JSON(state, json) {
      state.jsons.recipieJson = json;
    },
    SET_EX_JSON(state,json) {
      state.jsons.exerciseJson = json;
    },
    SET_MEAL_CAL(state, calValue) {
      state.calStorage.tempCalIn = calValue;
    },
    SET_EX_CAL(state, calValue) {
      state.calStorage.tempCalOut = calValue;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photoURL: user.photoURL,
        });
      } else {
        commit("SET_USER", null);
      }
    },
  },
});
