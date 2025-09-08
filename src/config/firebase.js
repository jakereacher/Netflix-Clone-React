import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-_hmuQ-XLZ_SAyk2UQku58gcLex1iiUk",
  authDomain: "netflix-clone-react-6cad9.firebaseapp.com",
  projectId: "netflix-clone-react-6cad9",
  storageBucket: "netflix-clone-react-6cad9.firebasestorage.app",
  messagingSenderId: "817699875370",
  appId: "1:817699875370:web:afefbb0cfc887c032c7153"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)