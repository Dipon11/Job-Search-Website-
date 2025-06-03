// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBacxzC2T3SvIJrKwkDuUxdac1g8vWKSJg",
  authDomain: "job-portal-f4a3c.firebaseapp.com",
  projectId: "job-portal-f4a3c",
  storageBucket: "job-portal-f4a3c.firebasestorage.app",
  messagingSenderId: "529161346720",
  appId: "1:529161346720:web:9de8d15e76707697aab3c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;