// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmq-WRoLcOsuS4UE-E4dbr9-xebz6piOo",
  authDomain: "sigl-plateforme.firebaseapp.com",
  projectId: "sigl-plateforme",
  storageBucket: "sigl-plateforme.firebasestorage.app",
  messagingSenderId: "1062591818644",
  appId: "1:1062591818644:web:a0ed089fdd46895e043d81",
  measurementId: "G-ERL3NLTNS0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)