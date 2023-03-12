// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkuMEoA8MH2ikrLwmL0qyfYW5DSgwUDIU",
  authDomain: "web3auth-flow.firebaseapp.com",
  projectId: "web3auth-flow",
  storageBucket: "web3auth-flow.appspot.com",
  messagingSenderId: "874540173699",
  appId: "1:874540173699:web:3031dbffec3202da24ceb6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
