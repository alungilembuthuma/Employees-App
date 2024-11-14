import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAKufzi1H20M7ruxz1YwC5yFPApItv2Yiw",
  authDomain: "abc-stevedoring.firebaseapp.com",
  projectId: "abc-stevedoring",
  storageBucket: "abc-stevedoring.firebasestorage.app",
  messagingSenderId: "404631990029",
  appId: "1:404631990029:web:5f01a0b32013d3bc0bca44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { auth, db, storage };
