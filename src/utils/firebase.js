// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvce0kiHfMwe7cp7ea_1jOfbqAR7HNhF0",
  authDomain: "echo-flix.firebaseapp.com",
  projectId: "echo-flix",
  storageBucket: "echo-flix.firebasestorage.app",
  messagingSenderId: "1023154433601",
  appId: "1:1023154433601:web:ebea3471558664f79920c0",
  measurementId: "G-KVV8RXY8TV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);