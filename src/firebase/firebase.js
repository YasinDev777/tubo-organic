import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhvHevdut5doVPuAIQ8ztpOy3DzIte3eI",
  authDomain: "tubo-organic.firebaseapp.com",
  projectId: "tubo-organic",
  storageBucket: "tubo-organic.firebasestorage.app",
  messagingSenderId: "264672207034",
  appId: "1:264672207034:web:191e5d7f5838c326c9e283",
  measurementId: "G-G8V0LJD9CC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };