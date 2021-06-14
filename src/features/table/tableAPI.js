  
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvSAXhTcfO4Pd4ID7F4UtXykTcjTOiPPY",
  authDomain: "triplewhale-5f761.firebaseapp.com",
  projectId: "triplewhale-5f761",
  storageBucket: "triplewhale-5f761.appspot.com",
  messagingSenderId: "866361874580",
  appId: "1:866361874580:web:6b474926d1bbbfb2097c81"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export function fetchData() {
  return db.collection("orders")
}

