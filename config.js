import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDouS-gWSULhPmpqI_Ls7RGGHITKP-TL5g",
  authDomain: "e-ride-3d113.firebaseapp.com",
  projectId: "e-ride-3d113",
  storageBucket: "e-ride-3d113.appspot.com",
  messagingSenderId: "493698805573",
  appId: "1:493698805573:web:fe0da146af67d76e0d982c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


