import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "accord-employee-reg-1.firebaseapp.com",
  projectId: "accord-employee-reg-1",
  storageBucket: "accord-employee-reg-1.appspot.com",
  messagingSenderId: "78437239726",
  appId: "1:78437239726:web:65845cd4d83b77fe94d63f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);