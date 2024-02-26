// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSEzu_mx5MYVDQjpS4iDhNoE1ecLrLrzw",
  authDomain: "movies-56943.firebaseapp.com",
  projectId: "movies-56943",
  storageBucket: "movies-56943.appspot.com",
  messagingSenderId: "882062238322",
  appId: "1:882062238322:web:f8926147c7a44ea3bfd8eb",
  measurementId: "G-JZRYZY32NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);