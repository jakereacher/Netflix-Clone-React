import { toast } from "react-toastify";
import { auth, db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

// ========================================================================================
// SIGN UP FUNCTION
// ========================================================================================
// Creates a new user with email and password, and saves user info to Firestore
// ========================================================================================
export const signUp = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await addDoc(collection(db, "users"), {
      uid: userCredential.user.uid,
      name,
      email,
    });

    return userCredential.user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toast.error("This email is already taken. Please use a different email.");
    } else if (error.code === "auth/invalid-email") {
      toast.error("The email you entered is not valid.");
    } else if (error.code === "auth/wrong-password") {
      toast.error("Incorrect password. Please try again.");
    } else if (error.code === "auth/invalid-credential") {
      toast.error("Invalid credentials.");
    } else {
      toast.error(error.message);
    }
  }
};

// ========================================================================================
// SIGN IN FUNCTION
// ========================================================================================
// Logs in an existing user using email and password
// ========================================================================================
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      toast.error("The email you entered is not valid.");
    } else if (error.code === "auth/wrong-password") {
      toast.error("Incorrect password. Please try again.");
    } else if (error.code === "auth/invalid-credential") {
      toast.error("Invalid credentials.");
    } else {
      toast.error(error.message);
    }
  }
};

// ========================================================================================
// SIGN OUT FUNCTION
// ========================================================================================
// Logs the current user out
// ========================================================================================
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.message);
  }
};
