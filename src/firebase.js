import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDIzxwu97luFfMGUJ1u7mXTn79TVecE0aE",
    authDomain: "facebook-messenger-clone-111b0.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-111b0.firebaseio.com",
    projectId: "facebook-messenger-clone-111b0",
    storageBucket: "facebook-messenger-clone-111b0.appspot.com",
    messagingSenderId: "377862587221",
    appId: "1:377862587221:web:ddeadede1ad3b33fb8a5dc",
    measurementId: "G-F8HLKYTP7X"


});
const db = firebaseApp.firestore();


export default db;