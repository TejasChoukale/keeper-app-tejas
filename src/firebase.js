// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc,
  updateDoc  // Add this import
} from "firebase/firestore";

// Firebase configuration (✅ Corrected values)
const firebaseConfig = {
  apiKey: "AIzaSyACOjSjYBcB7hIfotggDvTw83e9pjz17xc",
  authDomain: "keeper-webapp.firebaseapp.com",
  projectId: "keeper-webapp",
  storageBucket: "keeper-webapp.appspot.com",
  messagingSenderId: "1067887778060",
  appId: "1:1067887778060:web:361d26b3b2e62d8ff99129",
  measurementId: "G-KC238JTCV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore functions
export { 
  db, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc,
  updateDoc  // Add updateDoc to exports
};