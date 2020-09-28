import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCmvEE7KV3wzm7mHF29ZdJTyngr4GOryo",
  authDomain: "spotlight-db.firebaseapp.com",
  databaseURL: "https://spotlight-db.firebaseio.com",
  projectId: "spotlight-db",
  storageBucket: "spotlight-db.appspot.com",
  messagingSenderId: "848864995062",
  appId: "1:848864995062:web:19ed0bfc5e9d32b0b72ed7",
  measurementId: "G-Q41QK8YLBR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
