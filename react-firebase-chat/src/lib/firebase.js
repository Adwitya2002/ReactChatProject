// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlBdnjGdW4QrVPa8n9mnK_Bi5PUhOjhc4",
  authDomain: "authchat-74754.firebaseapp.com",
  projectId: "authchat-74754",
  storageBucket: "authchat-74754.appspot.com",
  messagingSenderId: "99742861626",
  appId: "1:99742861626:web:2112263c90e9b47af8e803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()