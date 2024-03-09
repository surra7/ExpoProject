// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw2hz8-SQV1Lj0pDzP8g5VbfviVcbuKPE",
  authDomain: "react-native-todo-app-cf3fc.firebaseapp.com",
  projectId: "react-native-todo-app-cf3fc",
  storageBucket: "react-native-todo-app-cf3fc.appspot.com",
  messagingSenderId: "242899092554",
  appId: "1:242899092554:web:575c7740729bf44e3612b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
