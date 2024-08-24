// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHGNkTU1CUb9FuPAaCbIMTUMQ43XQLpXQ",
  authDomain: "library-app-542b1.firebaseapp.com",
  projectId: "library-app-542b1",
  storageBucket: "library-app-542b1.appspot.com",
  messagingSenderId: "211753346441",
  appId: "1:211753346441:web:95dd99a39f64423fe62d58",
  measurementId: "G-21E5Q71WXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


let db = getFirestore(app);
let auth = getAuth(app);
let storage = getStorage(app);

export { db, auth, storage }
