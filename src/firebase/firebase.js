// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuuu2MXHLtmCQ8LD1CUXOmCq7ZAY38cnQ",
    authDomain: "prideconcept.firebaseapp.com",
    databaseURL: "https://prideconcept.firebaseio.com",
    projectId: "prideconcept",
    storageBucket: "",
    messagingSenderId: "30021662412",
    appId: "1:30021662412:web:84c235edb01657b2"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
