import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXQKK5r5wA1mqL0fe9XQgntLGoszGFUpE",
  authDomain: "mesmerizing-20739.firebaseapp.com",
  projectId: "mesmerizing-20739",
  storageBucket: "mesmerizing-20739.appspot.com",
  messagingSenderId: "420808093716",
  appId: "1:420808093716:web:4912390a2180df8498b701",
  measurementId: "G-4BDF55JQL8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;