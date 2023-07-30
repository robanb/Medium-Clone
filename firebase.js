// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firesstore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-y7eng41zw0oXQKoVzp6V5fidVtRJIuI",
  authDomain: "medium-clone-e904e.firebaseapp.com",
  projectId: "medium-clone-e904e",
  storageBucket: "medium-clone-e904e.appspot.com",
  messagingSenderId: "886938175623",
  appId: "1:886938175623:web:3499ce0a4022016cdbd022",
  measurementId: "G-CCRKRMSPR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };