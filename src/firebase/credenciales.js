// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//DESCOMENTAR ESTO PARA PROBAR LOCAL (SI ESTA COMENTADO)
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

// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCHknVjQSyyeknFzgOuyq3N6vrizfXJH70",
//   authDomain: "tutorial--login-5adcf.firebaseapp.com",
//   projectId: "tutorial--login-5adcf",
//   storageBucket: "tutorial--login-5adcf.appspot.com",
//   messagingSenderId: "116236705706",
//   appId: "1:116236705706:web:88dd02b898ce27a2d255d3",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;
// export const auth = getAuth(app);
// export const db = getFirestore(app);
