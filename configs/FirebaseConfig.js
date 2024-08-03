// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvvyP3QbaY4YGHt3UTsOCmfFRgqx2L-xQ",
  authDomain: "ai-travels-ab6e8.firebaseapp.com",
  projectId: "ai-travels-ab6e8",
  storageBucket: "ai-travels-ab6e8.appspot.com",
  messagingSenderId: "317299181039",
  appId: "1:317299181039:web:dd6a7c0652a74be648a21a",
  measurementId: "G-HNB9FEXQYK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
