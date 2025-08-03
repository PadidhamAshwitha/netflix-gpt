// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_HJps81v5Qg7fY1k8jZsnyHMILq_CLNc",
  authDomain: "netflix-gpt-33452.firebaseapp.com",
  projectId: "netflix-gpt-33452",
  storageBucket: "netflix-gpt-33452.firebasestorage.app",
  messagingSenderId: "586091000213",
  appId: "1:586091000213:web:2ddb72d681c766476b069c",
  measurementId: "G-R7LF39E4MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
