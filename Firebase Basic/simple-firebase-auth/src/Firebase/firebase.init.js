// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuTysxlBmqcDHbA4BgDahbqzBWFMEjVK4",
  authDomain: "simple-firebase-authenti-6bb35.firebaseapp.com",
  projectId: "simple-firebase-authenti-6bb35",
  storageBucket: "simple-firebase-authenti-6bb35.firebasestorage.app",
  messagingSenderId: "787719205414",
  appId: "1:787719205414:web:acee780d8aa8dd590a6ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);