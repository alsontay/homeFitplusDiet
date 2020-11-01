<template>
  <div>
    <mdb-row id="title-text">
      <p>
        CALORIE TRACKER <br />
        Keep track of your calorie count here!
      </p>
    </mdb-row>
    <div id="inputfields">
      <label id="label-text">Breakfast</label>
      <mdb-input type="number" v-model="calcount.bfastvalue" />

      <label id="label-text">Lunch</label>
      <mdb-input type="number" v-model="calcount.lunchvalue" />

      <label id="label-text">Dinner</label>
      <mdb-input type="number" v-model="calcount.dinnvalue" />
    </div>
    <div class="form-group row" id="inputfields">
      <label id="label-text">Date of Logging</label>
      <div class="col-lg-2">
        <input
          class="form-control"
          type="date"
          min="1940-01-01"
          v-model="calcount.date"
        />
      </div>
    </div>
    <div id="buttonstyle">
      <mdb-btn block color="default" type="submit">Submit</mdb-btn>
    </div>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "CalorieTrackerPage",
  components: {
    mdbInput,
  },
  data() {
    return {
      calcount: {
        bfastvalue: 0,
        lunchvalue: 0,
        dinnvalue: 0,
        date: "",
      },
    };
  },
};
</script>

<style scoped>
.test {
  border: 1px solid black;
}

#buttonstyle {
  width: 10%;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

#inputfields {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#label-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Caveat", cursive;
  font-size: 30px;
}

#title-text {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Caveat", cursive;
  font-size: 50px;
}
</style>
