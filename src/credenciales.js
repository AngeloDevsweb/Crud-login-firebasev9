// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApYc4yaAPJIBgGELD8-8DfU9UbAL6vqgQ",
  authDomain: "tutorialv9crud.firebaseapp.com",
  projectId: "tutorialv9crud",
  storageBucket: "tutorialv9crud.appspot.com",
  messagingSenderId: "890655761249",
  appId: "1:890655761249:web:407de410843a47e4461b20"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;