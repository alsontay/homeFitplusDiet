<template>
  <mdb-container class="test">
    <mdb-container class="mt-5 mb-5 test">
      <h2>Workout Recommendation</h2>
      <h3 id="title">
        We will generate for you a workout plan according to the current
        equipments you have!
      </h3>
    </mdb-container>
    <mdb-container
      class="mt-4 test d-flex flex-column align-items-center justify-content-center"
    >
      <mdb-row>
        <mdb-card class="p-4 pl-5 pr-5 mb-5" id="selectioncard">
          <h5>Select your workout intensity</h5>
          <mdb-row class="d-flex justify-content-center mb-3">
            <mdb-btn-group size="lg">
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectintensity('light')"
                :active="intensity === 'light'"
                >Light <br />(~20 mins)</mdb-btn
              >
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectintensity('moderate')"
                :active="intensity === 'moderate'"
                >Moderate <br />(~30 mins)</mdb-btn
              >
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectintensity('intense')"
                :active="intensity === 'intense'"
                >Intense <br />(~45 mins)</mdb-btn
              >
            </mdb-btn-group>
          </mdb-row>
          <h5>Add your available equipment here!</h5>
          <mdb-row class="d-flex justify-content-between align-items-center">
            <div>
              <select
                v-model="equipment"
                class="custom-select"
                style="width: 350px"
              >
                <option
                  v-for="equipment in equipmentList"
                  v-bind:key="equipment"
                >
                  {{ equipment }}
                </option>
              </select>
            </div>
            <mdb-btn color="default" class="ml-3" @click="selectEquipment">
              Add
            </mdb-btn>
          </mdb-row>
          <p id="helpertext">
            <small>Ignore if you have no available equipment</small>
          </p>
          <mdb-tbl hover class="mb-3">
            <mdb-tbl-head>
              <tr>
                <th><b>Selected Equipment</b></th>
              </tr>
            </mdb-tbl-head>
            <mdb-tbl-body>
              <tr
                v-for="equipment in selectedEquipment"
                v-bind:key="equipment"
                @click="removeEquipment(equipment)"
              >
                <td>{{ equipment }}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
          <p id="helpertext">
            <small>Click on the equipment to remove it from the list</small>
          </p>
        </mdb-card>
      </mdb-row>
      <mdb-row>
        <router-link to="/fitness-rec">
          <mdb-btn
            color="default"
            size="lg"
            class="ml-3"
            v-on:click="storeExercise"
          >
            <b>Generate Workout</b>
          </mdb-btn>
        </router-link>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import store from "../../store.js";

export default {
  name: "FitnessForm",
  data() {
    return {
      intensity: "light",
      equipmentList: ["Pull-up Bar", "Dumbbell", "Barbell", "Kettlebell"],
      equipment: "",
      selectedEquipment: [],
    };
  },
  methods: {
    selectintensity(intensity) {
      this.intensity = intensity;
    },
    selectEquipment() {
      if (
        this.equipment.trim() === "" ||
        !this.equipmentList.find((x) => x === this.equipment) ||
        !!this.selectedEquipment.find((x) => x === this.equipment)
      )
        return;
      this.selectedEquipment.push(this.equipment);
      this.equipment = "";
    },
    removeEquipment(equipment) {
      this.selectedEquipment = this.selectedEquipment.filter(
        (x) => x !== equipment
      );
    },
    storeExercise() {
      store.commit("SET_EX_INT", this.intensity);
      store.commit("SET_EX_EQM", this.selectedEquipment);
    },
  },
};
</script>

<style scoped>
#title {
  font-family: "Caveat", cursive;
}
#helpertext {
  color: gray;
}
</style>
