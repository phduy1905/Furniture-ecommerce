import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBK-V0fQ_6FeZcKPMvSxWNAyu3-vBlDuME",
  authDomain: "bns-yy-db.firebaseapp.com",
  projectId: "bns-yy-db",
  storageBucket: "bns-yy-db.appspot.com",
  messagingSenderId: "284872346166",
  appId: "1:284872346166:web:74f0d04dc8a0119782a697",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
