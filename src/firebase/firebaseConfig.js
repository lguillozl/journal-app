  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCjsiIfDlsQE7_VstJ5U8D5KanlZT8O604",
    authDomain: "react-app-bbf9f.firebaseapp.com",
    projectId: "react-app-bbf9f",
    storageBucket: "react-app-bbf9f.appspot.com",
    messagingSenderId: "365916899372",
    appId: "1:365916899372:web:9bd61dd9f5516a57652989"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase
  }