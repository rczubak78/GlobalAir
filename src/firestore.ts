import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_KEY,
	authDomain: "globalair-c9225.firebaseapp.com",
	projectId: "globalair-c9225",
	storageBucket: "globalair-c9225.appspot.com",
	messagingSenderId: "1098759769106",
	appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const firebase = getFirestore(app);
export const auth = getAuth(app);
