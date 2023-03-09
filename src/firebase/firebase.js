// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBin9jem_M1yum21DBw4kyMczYE1kv-Hwg",
  authDomain: "filmyverse-6a2cd.firebaseapp.com",
  projectId: "filmyverse-6a2cd",
  storageBucket: "filmyverse-6a2cd.appspot.com",
  messagingSenderId: "406981801285",
  appId: "1:406981801285:web:3ae4d47d304396d116ba2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;