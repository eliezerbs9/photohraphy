import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAUJE5LCvkjk7mMEPGt--C6eLde3i58GMI",
    authDomain: "photografy-f2bef.firebaseapp.com",
    databaseURL: "https://photografy-f2bef.firebaseio.com",
    projectId: "photografy-f2bef",
    storageBucket: "photografy-f2bef.appspot.com",
    messagingSenderId: "487506584583",
    appId: "1:487506584583:web:7474522190837c91e3b6a2",
    measurementId: "G-Q0C8R2HLWK"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
// const provider = firebase.auth.GoogleAuthProvider()
const auth = firebase.auth();

export  {storage, firestore, auth}