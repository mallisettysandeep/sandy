import { initializeApp } from "firebase/app";
import firebase from "./firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCpDdh5oIbTETHyjwLRQzuH14z3F79TuV4",
    authDomain: "auth-ca97d.firebaseapp.com",
    projectId: "auth-ca97d",
    storageBucket: "auth-ca97d.appspot.com",
    messagingSenderId: "889747830625",
    appId: "1:889747830625:web:59c3bd109580783d2a3720"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   
  

  const db =firebase.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;