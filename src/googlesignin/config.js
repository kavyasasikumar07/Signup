import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAW3o1VQOYOJYjF0TnBx49B5iWJ4r2SQIE",
  authDomain: "signup-f5485.firebaseapp.com",
  projectId: "signup-f5485",
  storageBucket: "signup-f5485.appspot.com",
  messagingSenderId: "1055941387494",
  appId: "1:1055941387494:web:5735786601f28586eb8727",
  measurementId: "G-C22MG71ZG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider};