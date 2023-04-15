// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCbNkWkyfDYAaauN1gZHulop0MZaZGtYMQ",
  authDomain: "login-system-a72f8.firebaseapp.com",
  projectId: "login-system-a72f8",
  storageBucket: "login-system-a72f8.appspot.com",
  messagingSenderId: "842256262478",
  appId: "1:842256262478:web:39858952e8e1a449e8aa1f",
  measurementId: "G-H0GNQPM29R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app ,auth}