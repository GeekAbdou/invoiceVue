import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCuKGf3dtZOG06P5qedTHtv4BPjFv3mKMk",
  authDomain: "invoiceapp-ff6b1.firebaseapp.com",
  projectId: "invoiceapp-ff6b1",
  storageBucket: "invoiceapp-ff6b1.appspot.com",
  messagingSenderId: "9510182594",
  appId: "1:9510182594:web:f65d749bf066daaa26655b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
