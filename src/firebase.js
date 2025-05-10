

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// ✅ Your Firebase config (from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDO2RwnkfSnezYECsO3FNsATAs9_Y5R0o0",
  authDomain: "vista-11c9d.firebaseapp.com",
  projectId: "vista-11c9d",
  storageBucket: "vista-11c9d.appspot.com",
  messagingSenderId: "484227808095",
  appId: "1:484227808095:web:df088a43ac947581dfd4ea",
  measurementId: "G-D6ZDN9Z6Z6"
};

// ✅ Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export Google login function
export function loginWithGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user; // includes email, displayName, photoURL, etc.
    })
    .catch((error) => {
      console.error("Google Sign-In Error:", error.code, error.message);
      throw error;
    });
}
