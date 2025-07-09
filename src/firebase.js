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
  apiKey: "AIzaSyD4sZA8mLtZniJMM3xceIvqZQHx1xMhkgo",
  authDomain: "ajayproject-4c603.firebaseapp.com",
  projectId: "ajayproject-4c603",
  storageBucket: "ajayproject-4c603.firebasestorage.app",
  messagingSenderId: "925948661905",
  appId: "1:925948661905:web:ec78d3194d45c767836f30",
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