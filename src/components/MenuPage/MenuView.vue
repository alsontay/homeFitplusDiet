<template>
  <div v-if="!recipes"></div>
  <div v-else-if="recipes.length < 3">
    <br /><br /><br /><br />
    <h1>(⌣́_⌣̀)</h1>
    <h3>
      Sorry! It appears that there is no recipes for your available ingredients
    </h3>
    <h3>Please try again with different preferences.</h3>
  </div>
  <div
    v-else
    class="accordion md-accordion accordion-3 z-depth-1-half"
    id="accordionEx194"
    role="tablist"
    aria-multiselectable="true"
  >
    <ul class="justify-content-center pt-5">
      <i class="fas fa-fish mr-3 fa-2x amber-text"></i>
      <i class="fas fa-carrot mr-3 fa-2x orange-text"></i>
      <i class="fas fa-drumstick-bite mr-3 fa-2x deep-orange-text"></i>
    </ul>

    <h2 id="title" class="text-center text-uppercase py-4 px-3">
      Here are your suggested recipes for the day!
    </h2>
    <h4>Choose one and enjoy!</h4>
    <hr class="mb-0" />

    <div class="rgba-red-slight py-5 px-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8">
          <!--Accordion wrapper-->
          <div
            class="accordion md-accordion accordion-5"
            id="accordionEx5"
            role="tablist"
            aria-multiselectable="true"
          >
            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div class="card-header red accent-1" role="tab" id="heading33">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse33"
                  aria-expanded="true"
                  aria-controls="collapse33"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ recipes[0].title }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse33"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading33"
                data-parent="#accordionEx5"
              >
                <div class="card-body red lighten-5 black-text z-depth-1">
                  <div class="row">
                    <div class="col-5 justify-content-center">
                      <div class="row">
                        <div class="col">
                          <img
                            :src="recipes[0].image"
                            class="img-fluid"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col">
                          NUTRIENTS:<br />
                          <p>
                            {{ recipes[0].nutrition.nutrients[0].title }}:
                            {{ recipes[0].nutrition.nutrients[0].amount
                            }}{{ recipes[0].nutrition.nutrients[0].unit }}
                            <br />
                            {{ recipes[0].nutrition.nutrients[1].title }}:
                            {{ recipes[0].nutrition.nutrients[1].amount
                            }}{{ recipes[0].nutrition.nutrients[1].unit }}
                            <br />
                            {{ recipes[0].nutrition.nutrients[3].title }}:
                            {{ recipes[0].nutrition.nutrients[3].amount
                            }}{{ recipes[0].nutrition.nutrients[3].unit }}
                            <br />
                            {{ recipes[0].nutrition.nutrients[5].title }}:
                            {{ recipes[0].nutrition.nutrients[5].amount
                            }}{{ recipes[0].nutrition.nutrients[5].unit }}
                            <br />
                            {{ recipes[0].nutrition.nutrients[8].title }}:
                            {{ recipes[0].nutrition.nutrients[8].amount
                            }}{{ recipes[0].nutrition.nutrients[8].unit }}
                          </p>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col">
                          PREPARATION TIME:<br />
                          <p>{{ recipes[0].readyInMinutes }}mins</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-7">
                      <div class="row">
                        <div class="col-4">
                          <div
                            class="card px-2 py-2 mb-5"
                            style="background-color: transparent"
                          >
                            INGREDIENTS: <br />
                            <div v-for="ing in ingList0" :key="ing" class="ing">
                              {{ ing }}
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          <div
                            class="card px-2 py-2 mb-5"
                            style="background-color: transparent"
                          >
                            INSTRUCTIONS: <br />
                            <div
                              v-for="step in recipes[0].analyzedInstructions[0]
                                .steps"
                              :key="step.number"
                            >
                              <p>{{ step.number }}: {{ step.step }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <button
                          v-on:click="
                            tracker(
                              recipes[0].title,
                              recipes[0].nutrition.nutrients[0].amount
                            )
                          "
                          class="btn btn-warning"
                        >
                          SELECTED AND TRACK!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->

            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div class="card-header red accent-1" role="tab" id="heading34">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse34"
                  aria-expanded="true"
                  aria-controls="collapse34"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ recipes[1].title }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse34"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading34"
                data-parent="#accordionEx5"
              >
                <div class="card-body red lighten-5 black-text z-depth-1">
                  <div class="row">
                    <div class="col-5 justify-content-center">
                      <div class="row">
                        <div class="col">
                          <img
                            :src="recipes[1].image"
                            class="img-fluid"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col">
                          NUTRIENTS:<br />
                          <p>
                            {{ recipes[1].nutrition.nutrients[0].title }}:
                            {{ recipes[1].nutrition.nutrients[0].amount
                            }}{{ recipes[1].nutrition.nutrients[0].unit }}
                            <br />
                            {{ recipes[1].nutrition.nutrients[1].title }}:
                            {{ recipes[1].nutrition.nutrients[1].amount
                            }}{{ recipes[1].nutrition.nutrients[1].unit }}
                            <br />
                            {{ recipes[1].nutrition.nutrients[3].title }}:
                            {{ recipes[1].nutrition.nutrients[3].amount
                            }}{{ recipes[1].nutrition.nutrients[3].unit }}
                            <br />
                            {{ recipes[1].nutrition.nutrients[5].title }}:
                            {{ recipes[1].nutrition.nutrients[5].amount
                            }}{{ recipes[1].nutrition.nutrients[5].unit }}
                            <br />
                            {{ recipes[1].nutrition.nutrients[8].title }}:
                            {{ recipes[1].nutrition.nutrients[8].amount
                            }}{{ recipes[1].nutrition.nutrients[8].unit }}
                          </p>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col">
                          PREPARATION TIME:<br />
                          <p>{{ recipes[1].readyInMinutes }}mins</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-7">
                      <div class="row">
                        <div class="col-4">
                          <div
                            class="card px-2 py-2 mb-5"
                            style="background-color: transparent"
                          >
                            INGREDIENTS: <br />
                            <div v-for="ing in ingList1" :key="ing" class="ing">
                              {{ ing }}
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          <div
                            class="card px-2 py-2 mb-5"
                            style="background-color: transparent"
                          >
                            INSTRUCTIONS: <br />
                            <div
                              v-for="step in recipes[1].analyzedInstructions[0]
                                .steps"
                              :key="step.number"
                            >
                              <p>{{ step.number }}: {{ step.step }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <button
                          v-on:click="
                            tracker(
                              recipes[1].title,
                              recipes[1].nutrition.nutrients[0].amount
                            )
                          "
                          class="btn btn-warning"
                        >
                          SELECTED AND TRACK!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->

            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div class="card-header red accent-1" role="tab" id="heading35">
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse35"
                  aria-expanded="true"
                  aria-controls="collapse35"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ recipes[2].title }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse35"
                class="collapse"
                role="tabpanel"
                aria-labelledby="heading35"
                data-parent="#accordionEx5"
              >
                <div class="card-body red lighten-5 black-text z-depth-1">
                  <div class="row">
                    <div class="col-5 justify-content-center">
                      <div class="row">
                        <div class="col">
                          <img
                            :src="recipes[2].image"
                            class="img-fluid"
                            alt="Responsive image"
                          />
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col">
                          NUTRIENTS:<br />
                          <p>
                            {{ recipes[2].nutrition.nutrients[0].title }}:
                            {{ recipes[2].nutrition.nutrients[0].amount
                            }}{{ recipes[2].nutrition.nutrients[0].unit }}
                            <br />
                            {{ recipes[2].nutrition.nutrients[1].title }}:
                            {{ recipes[2].nutrition.nutrients[1].amount
                            }}{{ recipes[2].nutrition.nutrients[1].unit }}
                            <br />
                            {{ recipes[2].nutrition.nutrients[3].title }}:
                            {{ recipes[2].nutrition.nutrients[3].amount
                            }}{{ recipes[2].nutrition.nutrients[3].unit }}
                            <br />
                            {{ recipes[2].nutrition.nutrients[5].title }}:
                            {{ recipes[2].nutrition.nutrients[5].amount
                            }}{{ recipes[2].nutrition.nutrients[5].unit }}
                            <br />
                            {{ recipes[2].nutrition.nutrients[8].title }}:
                            {{ recipes[2].nutrition.nutrients[8].amount
                            }}{{ recipes[2].nutrition.nutrients[8].unit }}
                          </p>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col">
                          PREPARATION TIME:<br />
                          <p>{{ recipes[2].readyInMinutes }}mins</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-7">
                      <div class="row">
                        <div class="col-4">
                          <div
                            class="card px-2 py-2 mb-5"
                            style="background-color: transparent"
                          >
                            INGREDIENTS: <br />
                            <div v-for="ing in ingList2" :key="ing" class="ing">
                              {{ ing }}
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          <div
                            class="card px-2 py-2 mb-5"
                            style="background-color: transparent"
                          >
                            INSTRUCTIONS: <br />
                            <div
                              v-for="step in recipes[2].analyzedInstructions[0]
                                .steps"
                              :key="step.number"
                            >
                              <p>{{ step.number }}: {{ step.step }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <button
                          v-on:click="
                            tracker(
                              recipes[2].title,
                              recipes[2].nutrition.nutrients[0].amount
                            )
                          "
                          class="btn btn-warning"
                        >
                          SELECTED AND TRACK!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->
          </div>
          <!--/.Accordion wrapper-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "../../firebase.js";

export default {
  name: "MenuView",
  props: ["recipes"],
  data() {
    return {
      menu: {
        currRecipe: {},
      },
      date : "",
      choice: "",
    };
  },
  computed: {
    ...mapGetters({
      user:"user",
      meals:"meals",
    }),

    ingList0: function () {
      let ing = [];
      let step = this.recipes[0].analyzedInstructions[0].steps;
      for (let j = 0; j < step.length; j++) {
        let ingr = step[j].ingredients;
        for (let i = 0; i < ingr.length; i++) {
          if (!ing.includes(ingr[i].name)) {
            ing.push(ingr[i].name);
          }
        }
      }
      return ing;
    },

    ingList1: function () {
      let ing = [];
      let step = this.recipes[1].analyzedInstructions[0].steps;
      for (let j = 0; j < step.length; j++) {
        let ingr = step[j].ingredients;
        for (let i = 0; i < ingr.length; i++) {
          if (!ing.includes(ingr[i].name)) {
            ing.push(ingr[i].name);
          }
        }
      }
      return ing;
    },

    ingList2: function () {
      let ing = [];
      let step = this.recipes[2].analyzedInstructions[0].steps;
      for (let j = 0; j < step.length; j++) {
        let ingr = step[j].ingredients;
        for (let i = 0; i < ingr.length; i++) {
          if (!ing.includes(ingr[i].name)) {
            ing.push(ingr[i].name);
          }
        }
      }
      return ing;
    },
  },

  methods: {
    async tracker (name, cal) { 
      //console.log(this.choice);
      const userid = this.user.data.id;
      var update = {};
      update[`${this.date}.consume.${this.choice}`] = cal;
      const db = firebase.firestore().collection("calories").doc(userid);
      const db2 = await db.get();
      if (db2.exists) {
        db.update(update);
      } else {
        var update2 = {};
        var update3 = {};
        update3[`${this.choice}`] = cal;
        update2[`${this.date}`] = {
          consume: update3,
        };
        db.set(update2);
      } 
      alert(
        name +
          " selected!\n" +
          cal.toString() +
          " kcal of calories will be logged."
      );
    },
    mutateChoice: function(initial) {
      if (initial === "breakfast") {
        return "bfast";
      } else if (initial === "dinner") {
        return "dinnr";
      } else {
        return initial;
      }
    }
  },
  mounted () {
    // Curr Date Calculation
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    this.date = today;
    this.choice = this.mutateChoice(this.meals.choice);
  }
};
</script>

<style scoped>
#title {
  font-family: "Caveat", cursive;
}

.accordion {
  font-family: "Caveat", cursive;
}

.btn {
  position: absolute;
  bottom: 0px;
  right: 10px;
}

p {
  font-size: 12pt;
  font-family: Arial;
}

.col-7 {
  font-size: 14pt;
}

.ing {
  margin-top: 0;
  margin-bottom: 0;
  font-family: Arial;
  font-size: 12pt;
}
</style>
