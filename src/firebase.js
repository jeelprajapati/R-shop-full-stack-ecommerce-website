// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADuO85eJdvIt-9IFPUZzUn-TyTORH1cXY",
  authDomain: "rshop-44029.firebaseapp.com",
  projectId: "rshop-44029",
  storageBucket: "rshop-44029.appspot.com",
  messagingSenderId: "576100459978",
  appId: "1:576100459978:web:9558d2d1254667d6bddb33",
  measurementId: "G-ZTPC4Y4QYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const auth = getAuth(app);
export {storage,auth};
export default app