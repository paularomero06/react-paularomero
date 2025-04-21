import { initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig={
    apiKey: "AIzaSyBl0dXE3_CkxGQ94b-6jkbZhs4c5p1-Ezg",
    authDomain: "la-tejeduria.firebaseapp.com",
    projectId: "la-tejeduria",
    storageBucket: "la-tejeduria.firebasestorage.app",
    messagingSenderId: "629670881087",
    appId: "1:629670881087:web:8a2d959f8c62d2673a958a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
