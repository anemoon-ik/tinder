// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmaVv-0on2ctUEhsq0l0bsIs1cQkOsDQ8",
  authDomain: "tinder-a4bbb.firebaseapp.com",
  projectId: "tinder-a4bbb",
  storageBucket: "tinder-a4bbb.appspot.com",
  messagingSenderId: "29236327307",
  appId: "1:29236327307:web:6c837be9ef4a2f3dbab58e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};
