// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDpffng8tYOnTomuN1zejMfKwPmwwgB2JQ",
	authDomain: "globalair-c9225.firebaseapp.com",
	projectId: "globalair-c9225",
	storageBucket: "globalair-c9225.appspot.com",
	messagingSenderId: "1098759769106",
	appId: "1:1098759769106:web:16305cfbf3c1b0187edccb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = getFirestore(app);
export const auth = getAuth(app);
