// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm9zwWPFiW_Iw1sc9YvJAFzmO0E244UNs",
  authDomain: "day-3-authentication.firebaseapp.com",
  projectId: "day-3-authentication",
  storageBucket: "day-3-authentication.firebasestorage.app",
  messagingSenderId: "8024733254",
  appId: "1:8024733254:web:215e645d4b55d78a1b3c47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);