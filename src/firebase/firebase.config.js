// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdFSSE8H7eldo21vYakArqHT_geZYLkdk",
  authDomain: "dragon-news-1f692.firebaseapp.com",
  projectId: "dragon-news-1f692",
  storageBucket: "dragon-news-1f692.firebasestorage.app",
  messagingSenderId: "734771930400",
  appId: "1:734771930400:web:9771264fb5bc97713e6345",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
