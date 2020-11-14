import { Line, mixins } from "vue-chartjs";
import firebase from "../../firebase.js";
import { mapGetters } from "vuex";

export default {
  extends: Line,
  data: function () {
    return {
      mixins: ["reactiveProp"],
      chartdata: {
        datasets: [
          {
            label: "Total Calories Burnt",
            data: [],
            backgroundColor: "rgba(236, 255, 189, 0.9)",
          },
        ],
        labels: [],
      },
      options: {
        title: {
          display: true,
          text: "Calorie Expenditure (Last 30 Entries)",
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Calorie Expenditure",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Valid Dates",
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      wow: new Event("resize"),
    };
  },

  computed: {
    ...mapGetters({
      user: "user",
    }),
  },

  methods: {
    fetchItems: function () {
      var docref = firebase
        .firestore()
        .collection("calories")
        .doc(this.user.data.id);
      var chartdata = this.chartdata;
      docref.get().then(function (doc) {
        if (doc.exists) {
          var ref2 = doc.data();
          var counter = 0;
          var sortedKeys = [];
          for (const item in ref2) {
            sortedKeys[sortedKeys.length] = item;
          }
          sortedKeys.sort();
          for (const item in ref2) {
            if (counter == 30) break;
            let data = ref2[sortedKeys[counter]].expend;
            var total = parseInt(data);
            for (var key in data) {
              total += parseInt(data[key]);
            }
            chartdata.labels.push(sortedKeys[counter]);
            chartdata.datasets[0].data.push(total);
            counter++;
          }
        }
      });
    },
    async render() {
      this.renderChart(this.chartdata, this.options);
    },
  },

  created() {
    this.fetchItems();
  },

  mounted() {
    setTimeout(this.render, 500);
  },
};
