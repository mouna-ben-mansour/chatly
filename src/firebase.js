import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyrKVfl1o9IDcF-pjx4zttwSfefJ-Ko7I",
  authDomain: "chatly-d1257.firebaseapp.com",
  projectId: "chatly-d1257",
  storageBucket: "chatly-d1257.appspot.com",
  messagingSenderId: "707398843336",
  appId: "1:707398843336:web:fe59ccdf8b10d97af19efd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();