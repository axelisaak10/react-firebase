// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-WkF2h0LJX_XMD5BPjpho9bU3AcUTOZk",
  authDomain: "primera-app-5dc42.firebaseapp.com",
  projectId: "primera-app-5dc42",
  storageBucket: "primera-app-5dc42.firebasestorage.app",
  messagingSenderId: "1007096143904",
  appId: "1:1007096143904:web:30c36da8b88d8b88821c45",
  measurementId: "G-V5Y8Y380QV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
