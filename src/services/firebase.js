// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔹 Tumhara Firebase config (apne project ka actual config yahan paste karo)
const firebaseConfig = {
  apiKey: "AIzaSyBgx3fgDuyNYM6R4udz0ZeqBSBR6qj7TH0",
  authDomain: "propbot-real-estate.firebaseapp.com",
  projectId: "propbot-real-estate",
  storageBucket: "propbot-real-estate.firebasestorage.app",
  messagingSenderId: "331012032182",
  appId: "1:331012032182:web:2fc36403f63775a93f0817"
};

// 🔹 Firebase initialize
const app = initializeApp(firebaseConfig);

// 🔹 Authentication export
export const auth = getAuth(app);