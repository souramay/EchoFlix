// Import Firebase SDK
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Load config from .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};


// Initialize Firebase (avoid re-initializing in Vite hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only if measurementId exists and browser supports it
let analytics;
if (import.meta.env.VITE_MEASUREMENT_ID && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Init Auth
const auth = getAuth(app);

export { app, auth, analytics };
