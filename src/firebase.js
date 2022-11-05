import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCcNTpMPGkMOYY5_KHt6R_4KMxWVpJjoGM",
    authDomain: "chatspace-dbee5.firebaseapp.com",
    projectId: "chatspace-dbee5",
    storageBucket: "chatspace-dbee5.appspot.com",
    messagingSenderId: "116066649572",
    appId: "1:116066649572:web:5293f1875d210b08ed33f1",
  })
  .auth();
