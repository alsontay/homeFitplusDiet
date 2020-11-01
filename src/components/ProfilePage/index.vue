<template>
  <mdb-container class="test">
    <mdb-container class="mt-5 mb-5 test">
      <h2>My Profile</h2>
    </mdb-container>
    <mdb-container class="mt-4 test">
      <mdb-row>
        <mdb-col class="test" md="4">
          <mdb-card class="p-3 mb-5">
            <mdb-card-image
              v-if="user.data.photoURL"
              :src="user.data.photoURL"
            />
            <mdb-card-body>
              <mdb-card-title>{{ user.data.displayName }}</mdb-card-title>
              <mdb-card-text>{{ user.data.email }}</mdb-card-text>
              <div class="input-group">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    accept="image/*"
                    aria-describedby="inputGroupFileAddon01"
                    @change="uploadProfilePic($event.target.files[0])"
                  />
                  <label
                    class="custom-file-label text-left"
                    for="inputGroupFile01"
                    >Change Picture</label
                  >
                </div>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col class="test" md="8">
          <mdb-card class="p-3 mb-5">
            <mdb-tabs
              :active="0"
              default
              :links="[
                { text: 'Update Profile' },
                { text: 'Account Settings' },
              ]"
              :transition-duration="0.5"
              transition-style="linear"
              border
            >
              <template :slot="'Update Profile'">
                <update-tab />
              </template>
              <template :slot="'Account Settings'">
                <account-tab />
              </template>
            </mdb-tabs>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "../../firebase";
import UpdateTab from "./Update.vue";
import AccountTab from "./Account.vue";

export default {
  name: "ProfilePage",
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  components: {
    UpdateTab,
    AccountTab,
  },
  methods: {
    uploadProfilePic: function (file) {
      const $router = this.$router;
      const storageRef = firebase.storage().ref();
      const profilePicRef = storageRef.child(
        `ProfilePictures/${this.user.data.id}/${file.name}`
      );
      const uploadTask = profilePicRef.put(file);
      uploadTask.on(
        "state_changed",
        function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        function (error) {
          return alert("Upload was unsuccessful");
        },
        function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (photoURL) {
            console.log("File available at", photoURL);
            firebase
              .auth()
              .currentUser.updateProfile({ photoURL })
              .then(() =>
                alert("Please refresh page to see your new profile photo")
              )
              .catch((error) => {
                console.error(error);
                alert("Upload was unsuccessful");
              });
          });
        }
      );
    },
  },
};
</script>

<style scoped>
/* .test {
  border: 1px solid black;
} */
</style>
