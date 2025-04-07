// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-WkF2h0LJX_XMD5BPjpho9bU3AcUTOZk",
  authDomain: "primera-app-5dc42.firebaseapp.com",
  projectId: "primera-app-5dc42",
  storageBucket: "primera-app-5dc42.firebasestorage.app",
  messagingSenderId: "1007096143904",
  appId: "1:1007096143904:web:30c36da8b88d8b88821c45",
  measurementId: "G-V5Y8Y380QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);