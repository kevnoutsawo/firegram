import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCjX0PRuS12J-4JG2OvT0XN7g2O2RLb-Qg",

  authDomain: "kevin-firegram.firebaseapp.com",

  projectId: "kevin-firegram",

  storageBucket: "kevin-firegram.appspot.com",

  messagingSenderId: "44889063268",

  appId: "1:44889063268:web:5599606d553d881109c471"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };