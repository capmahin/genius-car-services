// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2W3ID4cKsi2ePhl2apA9qsqHTGFRZCXA",
  authDomain: "genius-car-services-dd221.firebaseapp.com",
  projectId: "genius-car-services-dd221",
  storageBucket: "genius-car-services-dd221.appspot.com",
  messagingSenderId: "682455612710",
  appId: "1:682455612710:web:b19bac52044ce495d795e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
