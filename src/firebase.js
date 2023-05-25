// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZRwBf7_RAGl___Iy2J89q-Lc_KBgCUbA",
  authDomain: "robinhood-clone-7b637.firebaseapp.com",
  projectId: "robinhood-clone-7b637",
  storageBucket: "robinhood-clone-7b637.appspot.com",
  messagingSenderId: "328195497206",
  appId: "1:328195497206:web:753a59c3554d46ad0a20d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection}