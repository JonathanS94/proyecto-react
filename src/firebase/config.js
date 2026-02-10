// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCcX5YppfErQoNB1zl2SK667aio__YAeE8",
	authDomain: "reactshop-acad5.firebaseapp.com",
	projectId: "reactshop-acad5",
	storageBucket: "reactshop-acad5.firebasestorage.app",
	messagingSenderId: "267004515604",
	appId: "1:267004515604:web:be67a1a7e3b989d9ba1e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
