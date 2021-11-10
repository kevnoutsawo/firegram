import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCjX0PRuS12J-4JG2OvT0XN7g2O2RLb-Qg",

  authDomain: "kevin-firegram.firebaseapp.com",

  projectId: "kevin-firegram",

  storageBucket: "kevin-firegram.appspot.com",

  messagingSenderId: "44889063268",

  appId: "1:44889063268:web:6ae122a0f24925fb09c471"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };