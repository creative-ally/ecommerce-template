// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3qi51B-qnQulvsJGuEComSPRML4rWrlQ",
  authDomain: "e-commerce-bdd59.firebaseapp.com",
  projectId: "e-commerce-bdd59",
  storageBucket: "e-commerce-bdd59.appspot.com",
  messagingSenderId: "79334674037",
  appId: "1:79334674037:web:81b88272e3b155b5ec323c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth