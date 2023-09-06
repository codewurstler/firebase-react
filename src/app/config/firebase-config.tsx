import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: {apiKey: string, authDomain: string, projectId: string, storageBucket: string, messagingSenderId: string, appId: string} = {
    apiKey: "AIzaSyCHAobAgkScxv_j4JAg5FtgYuNnpfHt08Y",
    authDomain: "react-3afc3.firebaseapp.com",
    projectId: "react-3afc3",
    storageBucket: "react-3afc3.appspot.com",
    messagingSenderId: "596022542927",
    appId: "1:596022542927:web:2f1592fbcdfb5fbc01e03a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);