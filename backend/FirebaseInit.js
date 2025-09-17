// In this file we will initialize our firebase database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: copy-paste the config variables found in your Firebase Project Settings!
const firebaseConfig = {
    apiKey: "AIzaSyCWL9c32k0CqL7E72P7MHZeBjxDYR63GU8",
    authDomain: "fsab-deliverable.firebaseapp.com",
    projectId: "fsab-deliverable",
    storageBucket: "fsab-deliverable.firebasestorage.app",
    messagingSenderId: "332466005153",
    appId: "1:332466005153:web:4c84edca59c8904361bce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);