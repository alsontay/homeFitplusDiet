<template>
  <div
    class="accordion md-accordion accordion-3 z-depth-1-half"
    id="accordionEx194"
    role="tablist"
    aria-multiselectable="true"
  >
    <ul class="justify-content-center pt-5">
      <i class="fas fa-dumbbell mr-3 fa-2x amber-text"></i>
      <i class="fas fa-diagnoses mr-3 fa-2x orange-text"></i>
      <i class="fas fa-running mr-3 fa-2x deep-orange-text"></i>
    </ul>

    <h2
      id="title"
      class="text-center text-uppercase warning-color-text py-4 px-3"
    >
      Here are your workouts for the day!
    </h2>
    <h4 v-if="this.intensity == 'light'">
      Do 4 Sets of 6 for each of the exercises below. <br />Expected duration:
      20 minutes - Total Calories Burned:
    </h4>
    <h4 v-if="this.intensity == 'moderate'">
      Do 5 Sets of 10 for each of the exercises below. <br />Expected duration:
      30 minutes - Total Calories Burned:
    </h4>
    <h4 v-if="this.intensity == 'intense'">
      Do 7 Sets of 12 for each of the exercises below. <br />Expected duration:
      45 minutes - Total Calories Burned:
    </h4>

    <hr class="mb-0" />

    <div class="rgba-orange-slight py-5 px-4">
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
              <div
                class="card-header warning-color accent-1"
                role="tab"
                id="heading33"
              >
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse30"
                  aria-expanded="true"
                  aria-controls="collapse30"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ exercises.results[0].name }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse30"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading30"
                data-parent="#accordionEx5"
              >
                <div class="card-body yellow lighten-5 black-text z-depth-1">
                  <div class="row justify-content-center">
                    <div class="col">
                      <div
                        class="card px-2 py-2"
                        style="background-color: transparent"
                      >
                        <div class="col">
                          DESCRIPTION:<br />
                          <p>
                            <span v-html="exercises.results[0].description">
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col">
                      MUSCLES TRAINED:<br />
                      <div v-for="id in exercises.results[0].muscles" :key="id">
                        {{ muscles[id].name }}
                      </div>
                    </div>

                    <div class="col">
                      EQUIPMENT USED:<br />
                      <div
                        v-for="id in exercises.results[0].equipment"
                        :key="id"
                      >
                        {{ excal[id].name }}
                      </div>
                    </div>
                    <div class="col">
                      CALORIE BURNED:<br />
                      {{ calcCalories(exercises.results[0].equipment[0]) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->

            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div
                class="card-header warning-color accent-1"
                role="tab"
                id="heading33"
              >
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse31"
                  aria-expanded="true"
                  aria-controls="collapse31"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ exercises.results[1].name }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse31"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading31"
                data-parent="#accordionEx5"
              >
                <div class="card-body yellow lighten-5 black-text z-depth-1">
                  <div class="row justify-content-center">
                    <div
                      class="card px-2 py-2"
                      style="background-color: transparent"
                    >
                      <div class="col">
                        DESCRIPTION:<br />
                        <p>
                          <span v-html="exercises.results[1].description">
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col">
                      MUSCLES TRAINED:<br />
                      <div v-for="id in exercises.results[1].muscles" :key="id">
                        {{ muscles[id].name }}
                      </div>
                    </div>

                    <div class="col">
                      EQUIPMENT USED:<br />
                      <div
                        v-for="id in exercises.results[1].equipment"
                        :key="id"
                      >
                        {{ excal[id].name }}
                      </div>
                    </div>
                    <div class="col">
                      CALORIE BURNED:<br />
                      {{ calcCalories(exercises.results[1].equipment[0]) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->

            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div
                class="card-header warning-color accent-1"
                role="tab"
                id="heading33"
              >
                <a
                  data-toggle="collapse"
                  data-parent="#accordionEx5"
                  href="#collapse32"
                  aria-expanded="true"
                  aria-controls="collapse32"
                >
                  <h4
                    class="justify-content-center text-uppercase black-text mb-0 py-3 mt-1"
                  >
                    {{ exercises.results[2].name }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse32"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading32"
                data-parent="#accordionEx5"
              >
                <div class="card-body yellow lighten-5 black-text z-depth-1">
                  <div class="row justify-content-center">
                    <div
                      class="card px-2 py-2"
                      style="background-color: transparent"
                    >
                      <div class="col">
                        DESCRIPTION:<br />
                        <p>
                          <span v-html="exercises.results[2].description">
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col">
                      MUSCLES TRAINED:<br />
                      <div v-for="id in exercises.results[2].muscles" :key="id">
                        {{ muscles[id].name }}
                      </div>
                    </div>

                    <div class="col">
                      EQUIPMENT USED:<br />
                      <div
                        v-for="id in exercises.results[2].equipment"
                        :key="id"
                      >
                        {{ excal[id].name }}
                      </div>
                    </div>
                    <div class="col">
                      CALORIE BURNED:<br />
                      {{ calcCalories(exercises.results[2].equipment[0]) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->
            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div
                class="card-header warning-color accent-1"
                role="tab"
                id="heading33"
              >
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
                    {{ exercises.results[3].name }}
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
                <div class="card-body yellow lighten-5 black-text z-depth-1">
                  <div class="row justify-content-center">
                    <div
                      class="card px-2 py-2"
                      style="background-color: transparent"
                    >
                      <div class="col">
                        DESCRIPTION:<br />
                        <p>
                          <span v-html="exercises.results[3].description">
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col">
                      MUSCLES TRAINED:<br />
                      <div v-for="id in exercises.results[3].muscles" :key="id">
                        {{ muscles[id].name }}
                      </div>
                    </div>

                    <div class="col">
                      EQUIPMENT USED:<br />
                      <div
                        v-for="id in exercises.results[3].equipment"
                        :key="id"
                      >
                        {{ excal[id].name }}
                      </div>
                    </div>
                    <div class="col">
                      CALORIE BURNED:<br />
                      {{ calcCalories(exercises.results[3].equipment[0]) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion card -->
            <!-- Accordion card -->
            <div class="card mb-4">
              <!-- Card header -->
              <div
                class="card-header warning-color accent-1"
                role="tab"
                id="heading33"
              >
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
                    {{ exercises.results[4].name }}
                  </h4>
                </a>
              </div>

              <!-- Card body -->
              <div
                id="collapse34"
                class="collapse show"
                role="tabpanel"
                aria-labelledby="heading34"
                data-parent="#accordionEx5"
              >
                <div class="card-body yellow lighten-5 black-text z-depth-1">
                  <div class="row justify-content-center">
                    <div
                      class="card px-2 py-2"
                      style="background-color: transparent"
                    >
                      <div class="col">
                        DESCRIPTION:<br />
                        <p>
                          <span v-html="exercises.results[4].description">
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-5">
                    <div class="col">
                      MUSCLES TRAINED:<br />
                      <div v-for="id in exercises.results[4].muscles" :key="id">
                        {{ muscles[id].name }}
                      </div>
                    </div>

                    <div class="col">
                      EQUIPMENT USED:<br />
                      <div
                        v-for="id in exercises.results[4].equipment"
                        :key="id"
                      >
                        {{ excal[id].name }}
                      </div>
                    </div>
                    <div class="col">
                      CALORIE BURNED:<br />
                      {{ calcCalories(exercises.results[4].equipment[0]) }}
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
import axios from "axios";
import { mapGetters } from "vuex";
import muscles from "../../assets/muscles.json";
import excal from "../../assets/excal.json";

export default {
  computed: {
    ...mapGetters({
      exRequest: "exercise",
    }),
  },

  data() {
    return {
      exercises: [],
      equipmentList: [],
      intensity: "",
      muscles,
      excal,
      requeststring:
        "https://wger.de/api/v2/exercise/?language=2&format=json&limit=5&equipment=7",
    };
  },

  methods: {
    calcCalories: function (id) {
      const calorieMin = excal[id][this.intensity];
      const totalMin =
        this.intensity == "light"
          ? 17.45 / 5
          : this.intensity == "moderate"
          ? 25 / 5
          : 36 / 5; //minus rest time
      const currCalorie =
        Math.round(
          (calorieMin * totalMin + Math.random() - Math.random() + 1) * 10
        ) / 10;
      console.log(currCalorie);
      return currCalorie;
    },
    requestStringMaker: function () {
      for (let equipment of this.equipmentList) {
        var id =
          equipment == "Pull-Up Bar"
            ? 6
            : equipment == "Dumbbell"
            ? 3
            : equipment == "Barbell"
            ? 1
            : 10;
        this.requeststring += "&equipment=" + id;
      }
      this.requeststring +=
        "&offset=" + Math.floor((Math.random() * 100 + 1) / 6);
      console.log(this.requeststring);
      return this.requeststring;
    },
  },

  mounted() {
    this.equipmentList = this.exRequest.equipments;
    this.intensity = this.exRequest.intensity;
    axios.get(this.requestStringMaker()).then((response) => {
      console.log("Response==>");
      console.log(response);
      this.exercises = response.data;
    });
  },
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
