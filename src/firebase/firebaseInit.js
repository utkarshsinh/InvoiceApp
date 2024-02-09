import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrINf2X7W0rkJMp_WJBcVYTaNdR7X6FNk",
    authDomain: "invoice-app-yt-f8922.firebaseapp.com",
    projectId: "invoice-app-yt-f8922",
    storageBucket: "invoice-app-yt-f8922.appspot.com",
    messagingSenderId: "221513789464",
    appId: "1:221513789464:web:884f48cbebb4f20b68136d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();