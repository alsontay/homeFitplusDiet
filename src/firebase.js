import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZrFc5mYIz1BTd2N8_RWbQIUcDv3WkhBg",
    authDomain: "homefitdiet-f9353.firebaseapp.com",
    databaseURL: "https://homefitdiet-f9353.firebaseio.com",
    projectId: "homefitdiet-f9353",
    storageBucket: "homefitdiet-f9353.appspot.com",
    messagingSenderId: "590939537225",
    appId: "1:590939537225:web:22733c3d436fca142b2498",
    measurementId: "G-E2P2T3JE0V"
  };

  firebase.initializeApp(firebaseConfih);
  var database = firebase.firestore();
  export default firebase;