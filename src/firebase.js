import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAN7BFgEYvO_bycv9A3gcCE1aETz_NBSu4",
  authDomain: "netflix-clone-5fb0b.firebaseapp.com",
  projectId: "netflix-clone-5fb0b",
  storageBucket: "netflix-clone-5fb0b.appspot.com",
  messagingSenderId: "81765008206",
  appId: "1:81765008206:web:b8d8cd69667db6c1d4941f",
  measurementId: "G-22Y949VYX8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
