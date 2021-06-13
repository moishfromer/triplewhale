  
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


// A mock function to mimic making an async request for data
export function fetchData() {
  return db.collection("orders").get()
  .then((querySnapshot) => ({
    data: querySnapshot.docs.map(doc=>doc.data())
  }))
}

