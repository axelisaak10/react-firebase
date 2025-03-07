import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYEr3Y6Yoi4eLvGUbEARL6Ny-HwnDG25s",
  authDomain: "miapp-integral-a175e.firebaseapp.com",
  projectId: "miapp-integral-a175e",
  storageBucket: "miapp-integral-a175e.firebasestorage.app",
  messagingSenderId: "688009322166",
  appId: "1:688009322166:web:37b4fbe3c84f4c2f765017",
  measurementId: "G-BBQ1YKP69H"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
