<template>
  <mdb-container class="pb-2 test">
    <h5 class="m-4">Change Password</h5>
    <mdb-row class="m-6 p-2 test">
      <mdb-col col="12">
        <mdb-row class="form-group row">
          <mdb-col col="3">
            <label>Current Password</label>
          </mdb-col>
          <mdb-col col="9">
            <input
              type="password"
              class="form-control"
              required
              v-model="currentPassword"
            />
          </mdb-col>
        </mdb-row>
        <mdb-row class="form-group row">
          <mdb-col col="3">
            <label>New Password</label>
          </mdb-col>
          <mdb-col col="9">
            <input
              type="password"
              class="form-control"
              required
              v-model="newPassword"
            />
          </mdb-col>
        </mdb-row>
        <mdb-row class="form-group row">
          <mdb-col col="3">
            <label>Confirm Password</label>
          </mdb-col>
          <mdb-col col="9">
            <input
              type="password"
              class="form-control"
              required
              v-model="cfmNewPassword"
            />
          </mdb-col>
        </mdb-row>
        <input
          type="button"
          class="btn btn-default"
          value="Change Password"
          @click="changePassword"
        />
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import firebase from "../../firebase";
import { mapGetters } from "vuex";

export default {
  name: "AccountTab",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      cfmNewPassword: "",
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    changePassword: function () {
      if (this.newPassword !== this.cfmNewPassword)
        return alert("Passwords do not match");
      firebase
        .auth()
        .currentUser.reauthenticateWithCredential(
          firebase.auth.EmailAuthProvider.credential(
            this.user.data.email,
            this.currentPassword
          )
        )
        .then(() =>
          firebase.auth().currentUser.updatePassword(this.newPassword)
        )
        .then(() => {
          alert("Password has been changed");
          this.currentPassword = "";
          this.newPassword = "";
          this.cfmNewPassword = "";
        })
        .catch((error) => alert(error.message));
    },
  },
};
</script>

<style scoped>
.test {
  border: 1px solid white;
}
</style>
