<template>
  <div>
    {{ exercises }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      exercises: {},
      equipmentid: 4, //contain equipment that the person has checkboxed or sth
      requeststring: "https://wger.de/api/v2/exercise/?language=2&format=json",
    };
  },
  methods: {
    requestStringMaker: function () {
      var equipmentString = "&equipment=" + this.equipmentid;
      return this.requeststring + equipmentString;
    },
  },

  mounted() {
    axios.get(this.requestStringMaker()).then((response) => {
      console.log("Response==>");
      console.log(response);
      this.exercises = response.data;
      console.log("Links==>");
      console.log(this.d1);
    });
  },
};
</script>
<style scoped></style>
