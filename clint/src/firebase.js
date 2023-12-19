// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Ym01HVQKDEklZD9u6OW_-0-ake2n5Oc",
  authDomain: "netflix-clone-400ef.firebaseapp.com",
  projectId: "netflix-clone-400ef",
  storageBucket: "netflix-clone-400ef.appspot.com",
  messagingSenderId: "251771401587",
  appId: "1:251771401587:web:b9d42c7db2bd9d87f28106",
  measurementId: "G-9HWETX717N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;