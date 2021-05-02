import firebase from "firebase/app";

const firebaseConfig ={
    apiKey: "AIzaSyCU8H-_WL9nKqQLG0-SSgIKkiipeuuMQn4",
    authDomain: "foodbook-cc133.firebaseapp.com",
    projectId: "foodbook-cc133",
    storageBucket: "foodbook-cc133.appspot.com",
    messagingSenderId: "1025332176815",
    appId: "1:1025332176815:web:706f0b2908b85b6bca715a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);