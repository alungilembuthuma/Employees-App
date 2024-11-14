// firebaseConfig.js (Updated)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAKufzi1H20M7ruxz1YwC5yFPApItv2Yiw",
  authDomain: "abc-stevedoring.firebaseapp.com",
  projectId: "abc-stevedoring",
  storageBucket: "abc-stevedoring.appspot.com",  // Corrected the URL here
  messagingSenderId: "404631990029",
  appId: "1:404631990029:web:5f01a0b32013d3bc0bca44"
};  // Closing curly brace for the firebaseConfig object

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore, Auth, and Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Export the services
export { db, auth, storage };
