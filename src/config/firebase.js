// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2OPDRUrxLKOaHr53uFAZXfJo5IalU37U",
  authDomain: "netflix-clone-react-457af.firebaseapp.com",
  projectId: "netflix-clone-react-457af",
  storageBucket: "netflix-clone-react-457af.appspot.com",
  messagingSenderId: "899434376748",
  appId: "1:899434376748:web:a4cfe98a22a02953eaab89",
  measurementId: "G-FXQWTTVR59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;
