// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSZPUtHCGHqkwFHQssaNCUhWh_NnQJ9DQ",
  authDomain: "shoppingday-52e93.firebaseapp.com",
  projectId: "shoppingday-52e93",
  storageBucket: "shoppingday-52e93.appspot.com",
  messagingSenderId: "205890644647",
  appId: "1:205890644647:web:ac0c3d45a1163fb4c60982",
  measurementId: "G-PKWJ4F29F0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export { auth, fireDb, provider };