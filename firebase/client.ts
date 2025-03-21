// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCagu3iT6tGKxQQGY4Gd5iRhFknRZ6qzeM",
  authDomain: "interview-ai-f0572.firebaseapp.com",
  projectId: "interview-ai-f0572",
  storageBucket: "interview-ai-f0572.firebasestorage.app",
  messagingSenderId: "12005480405",
  appId: "1:12005480405:web:3841db77c967f39af4cf5c",
  measurementId: "G-NG4B2BYB0J"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
