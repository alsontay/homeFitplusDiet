<template>
  <div>
    <li v-for="item in d1" v-bind:key="item">
      {{ item }}
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      d1: {},
      equipmentid: "", //contain equipment that the person has checkbox or sth
      requeststring: "https://wger.de/api/v2/exercise/?language=2",
    };
  },
  methods: {
    requestStringMaker: function () {
      var equipmentString = "&equipment=" + this.equipmentid;
    },
  },

  mounted() {
    axios.get(this.requeststring).then((response) => {
      console.log("Response==>");
      console.log(response);
      this.d1 = response.data;
      console.log("Links==>");
      console.log(this.d1);
    });
  },
};
</script>
<style scoped></style>
