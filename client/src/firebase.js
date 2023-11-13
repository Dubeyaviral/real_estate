// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-28fd2.firebaseapp.com",
  projectId: "mern-estate-28fd2",
  storageBucket: "mern-estate-28fd2.appspot.com",
  messagingSenderId: "492001209104",
  appId: "1:492001209104:web:71be4d0af9233e6a86d395"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);