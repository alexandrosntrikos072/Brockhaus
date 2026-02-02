// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ9_DDZEKEKDu2eZv1eMY0nCoOvwywL_U",
  authDomain: "beat-9d0ea.firebaseapp.com",
  projectId: "beat-9d0ea",
  storageBucket: "beat-9d0ea.firebasestorage.app",
  messagingSenderId: "199050207211",
  appId: "1:199050207211:web:46a50ba3f400e4167803ae",
  measurementId: "G-P6LCP6GQDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);