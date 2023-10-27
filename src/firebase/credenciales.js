// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Hqoj8nvbu9WCSdGzqQ3frOrcPlPixVI",
  authDomain: "kappamusic-ce6cf.firebaseapp.com",
  projectId: "kappamusic-ce6cf",
  storageBucket: "kappamusic-ce6cf.appspot.com",
  messagingSenderId: "473715430990",
  appId: "1:473715430990:web:76e3e3eed4a7797d3fd51f",
};

// Initialize Firebase
// const appFirebase = initializeApp(firebaseConfig);
// export default appFirebase;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
