<template>
  <div>
    <mdb-row id="title-text">
      <h2>Monthly Report</h2>
      <h3 id="title">
        Hello {{ this.user.data.displayName }}, here's your progress over the
        past 30 entries!
      </h3>
      <mdb-row id="disclaimer">
        It can take a while for the server to fetch your calorie data, so please
        be patient :)
      </mdb-row>
    </mdb-row>
    <mdb-container>
      <mdb-row>
        <mdb-col>
          <mdb-card class="chart-bg">
            <h4>Calorie Consumption</h4>
            <calorie-chart> </calorie-chart>
          </mdb-card>
        </mdb-col>
        <mdb-col>
          <mdb-card class="chart-bg">
            <h4>Calorie Expenditure</h4>
            <calorie-chart-b> </calorie-chart-b>
          </mdb-card>
        </mdb-col>
      </mdb-row>

      <h3>
        <br />
        <br />
        Recommended Calorie Consumption and Expenditure to aim for!
      </h3>
      <h4>Target 20% less calories if you are trying to lose weight.</h4>

      <div class="row">
        <div class="col">
          <img :src="table" class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </mdb-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CalorieChart from "./CalorieChart.vue";
import CalorieChartB from "./CalorieChartB.vue";
import image from "../../assets/calorietable.jpg";

export default {
  name: "MonthlyReport",
  data() {
    return {
      table: image,
    };
  },
  components: {
    CalorieChart,
    CalorieChartB,
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  mounted() {
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 5000);
  },
};
</script>

<style scoped>
#title {
  font-family: "Caveat", cursive;
}
#title-text {
  padding: 20px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-family: "Roboto";
  font-size: 35px;
  font-weight: 500;
}

h3 {
  font-family: "Roboto";
  font-size: 25px;
  font-weight: 250;
}

h4 {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 250;
}

.chart-bg {
  padding: 15px;
}

#disclaimer {
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "Roboto";
}
</style>
