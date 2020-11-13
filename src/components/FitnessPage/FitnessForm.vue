<template>
  <mdb-container class="test">
    <mdb-container class="mt-5 mb-5 test">
      <h2>Workout</h2>
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
                >Light</mdb-btn
              >
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectintensity('moderate')"
                :active="intensity === 'moderate'"
                >Moderate</mdb-btn
              >
              <mdb-btn
                color="default"
                size="lg"
                @click.native="selectintensity('intense')"
                :active="intensity === 'intense'"
                >Intense</mdb-btn
              >
            </mdb-btn-group>
          </mdb-row>
          <h5>List your available equipment here!</h5>
          <mdb-row class="d-flex justify-content-between align-items-center">
            <div>
              <select
                v-model="equipment"
                class="custom-select"
                style="width: 260px"
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
        <router-link to="/fitnessrec">
          <mdb-btn color="default" size="lg" class="ml-3">
            <b>Generate Workout</b>
          </mdb-btn>
        </router-link>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
export default {
  name: "FitnessForm",
  data() {
    return {
      intensity: "light",
      equipmentList: [
        "None",
        "Pull-up Bar",
        "Dumbbell",
        "Barbell",
        "Kettlebell",
      ],
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
  },
};
</script>

<style scoped></style>
