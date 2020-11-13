<template>
  <div
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

    <h2 id="title" class="text-center text-uppercase red-text py-4 px-3">
      Here are your menus for the day!
    </h2>

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
                    <div class="col-5">
                      <img
                        :src="recipes[0].image"
                        class="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                    <div class="col-7">
                      <div class="row">
                        <div class="col-4">
                          <div class="row">
                            <div class="col">
                              NUTRIENTS:<br />
                              <p>
                                Calories:
                                {{ recipes[0].nutrition.nutrients[0].amount }}
                                kcal
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
                          <br />
                          <div class="row">
                            <div class="col">
                              DIET TYPE:<br />
                              <p>{{ recipes[0].diets[0] }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          INGREDIENTS: <br />
                          <div
                            v-for="step in recipes[0].analyzedInstructions[0]
                              .steps"
                            :key="step.number"
                          >
                            <p
                              class="ingList mt-0 mb-0"
                              v-for="ingredient in step.ingredients"
                              :key="ingredient.id"
                            >
                              {{ ingredient.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <router-link to="/menuSelected"
                          ><button
                            v-on:click="setValue(0)"
                            class="btn btn-warning"
                          >
                            SELECT
                          </button></router-link
                        >
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
                    <div class="col-5">
                      <img
                        :src="recipes[1].image"
                        class="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                    <div class="col-7">
                      <div class="row">
                        <div class="col-4">
                          <div class="row">
                            <div class="col">
                              NUTRIENTS:<br />
                              <p>
                                Calories:
                                {{ recipes[1].nutrition.nutrients[0].amount }}
                                kcal
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
                          <br />
                          <div class="row">
                            <div class="col">
                              DIET TYPE:<br />
                              <p>{{ recipes[1].diets[0] }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          INGREDIENTS: <br />
                          <div
                            v-for="step in recipes[1].analyzedInstructions[0]
                              .steps"
                            :key="step.number"
                          >
                            <p
                              class="ingList mt-0 mb-0"
                              v-for="ingredient in step.ingredients"
                              :key="ingredient.id"
                            >
                              {{ ingredient.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <router-link to="/menuSelected"
                          ><button
                            v-on:click="setValue(1)"
                            class="btn btn-warning"
                          >
                            SELECT
                          </button></router-link
                        >
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
                    <div class="col-5">
                      <img
                        :src="recipes[2].image"
                        class="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                    <div class="col-7">
                      <div class="row">
                        <div class="col-4">
                          <div class="row">
                            <div class="col">
                              NUTRIENTS:<br />
                              <p>
                                Calories:
                                {{ recipes[2].nutrition.nutrients[0].amount }}
                                kcal
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
                          <br />
                          <div class="row">
                            <div class="col">
                              DIET TYPE:<br />
                              <p>{{ recipes[2].diets[0] }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-8">
                          INGREDIENTS: <br />
                          <div
                            v-for="step in recipes[2].analyzedInstructions[0]
                              .steps"
                            :key="step.number"
                          >
                            <p
                              class="ingList mt-0 mb-0"
                              v-for="ingredient in step.ingredients"
                              :key="ingredient.id"
                            >
                              {{ ingredient.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <router-link to="/menuSelected"
                          ><button
                            v-on:click="setValue(2)"
                            class="btn btn-warning"
                          >
                            SELECT
                          </button></router-link
                        >
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
import { mapGetters } from 'vuex';

export default {
  name: "MenuView",
  props: ["recipes"],
  // computed: {
  //   ...mapGetters({
  //     mealRequests: "meals",
  //   }), 
  // },
  data() {
    return {
      menu: {
        bfast: "",
        lunch: "",
        dinner: "",
      },
    };
  },
  methods: {
    setValue: function (val) {
      this.menu.bfast = val;
      this.menu.lunch = val;
      this.menu.dinner = val;
    },
  },

  mounted() {
    console.log("hi")
    //this.fullmenu = this.mealRequests.recipieJson;
    //setTimeout(function() {console.log("hi"); console.log(this.mealRequests);}, 2000);
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
</style>
