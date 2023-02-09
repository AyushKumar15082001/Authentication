// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYwN6RkmyCpjLiRTIYRhawEkV_7e60N1s",
  authDomain: "adroit-lantern-319921.firebaseapp.com",
  projectId: "adroit-lantern-319921",
  storageBucket: "adroit-lantern-319921.appspot.com",
  messagingSenderId: "612427855896",
  appId: "1:612427855896:web:86aaee6df94636f5d0ab6d",
  measurementId: "G-31PMTHCSR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};
// const analytics = getAnalytics(app);