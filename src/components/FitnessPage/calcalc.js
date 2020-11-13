import { mapGetters } from 'vuex';
import store from "../../store.js"
import values from "../../assets/excal.json";

export default {
    computed: {
        ...mapGetters({
            exRequest: "exercise",
            user: "user",
        }),
    },
    
    data() {
        return {
            exerciseID = 0,
            intensity = "",
            caloriesBurnt = 0,
            date = "",
        }
    },

    methods: {
        calc: function() {
            if (this.intensity === "light") {
                this.calcLight();
            } else if (this.intensity === "medium") {
                this.calcMedium();
            } else if (this.intensity === "intense") {
                this.calcIntense();
            }
        },

        calcLight: function() {
            const x = values[exerciseID.toString()]["light"];
            this.caloriesBurnt = x * 17.75;
            store.commit("SET_EX_CAL", x);
        },

        calcMedium: function() {
            const x = values[exerciseID.toString()]["medium"];
            this.caloriesBurnt = x * 25;
            store.commit("SET_EX_CAL", x);
        },

        calcIntense: function() {
            const x = values[exerciseID.toString()]["intense"];
            this.caloriesBurnt = x * 36; // x calories per min, 36 min total
            store.commit("SET_EX_CAL", x);
        },

        async updateInformation() {
            const userid = this.user.data.id;
            var update = {};
            update[`${this.date}.expend`] = this.caloriesBurnt;
            const db = firebase.firestore().collection("calories").doc(userid);
            const db2 = await db.get();
            if (db2.exists) {
              db.update(update);
            } else {
              var update2 = {};
              update2[`${this.date}`] = {
                expend: this.caloriesBurnt,
              };
              db.set(update);
            }
            alert("Calorie Counts Updated!");
          },
    },

    mounted() {
        this.exerciseID = this.exRequest.equipment[0];
        this.intensity = this.exRequest.intensity;
        // Automatically sets the calender date to today
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;
        this.date = today;
    }
}