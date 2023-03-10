import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7-UXRscn1Pr-5xAiCYtEaYkN_EcFZZwc",
  authDomain: "testingproject-2ac1e.firebaseapp.com",
  projectId: "testingproject-2ac1e",
  storageBucket: "testingproject-2ac1e.appspot.com",
  messagingSenderId: "568678718990",
  appId: "1:568678718990:web:0de34d2fbfaa405463265f",
  measurementId: "G-RQFB985D08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)


//init data base from firebase firestore
