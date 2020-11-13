<template>
  <div>
    {{ exercises }}
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      exRequest: 'exercise',
    }),
  },
  data() {
    return {
      exercises: [],
      equipmentlist: [7], //contain equipment that the person has checkboxed or sth
      requeststring:
        "https://wger.de/api/v2/exercise/?language=2&format=json&limit=5",
    };
  },
  methods: {
    requestStringMaker: function () {
      for (let id of this.equipmentlist) {
        this.requeststring += "&equipment=" + id;
      }
      this.requeststring +=
        "&offset=" + Math.floor((Math.random() * 100 + 1) / 5);
      console.log(this.requeststring);
      return this.requeststring;
    },
  },

  mounted() {
    this.equipmentlist = this.exRequest.equipments;
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
