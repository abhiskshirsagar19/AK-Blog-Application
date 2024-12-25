// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ak-blog-3f6bd.firebaseapp.com",
  projectId: "ak-blog-3f6bd",
  storageBucket: "ak-blog-3f6bd.firebasestorage.app",
  messagingSenderId: "511251918317",
  appId: "1:511251918317:web:87cb3e7cbe1d8903f8cbe4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
