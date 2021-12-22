import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//import {initializeApp} from 'firebase/app'
//import {getFirestore} from 'firebase/firestore'

//initializeApp(firebaseConfig)
//const db = getFirestore()
//export {db}

const firebaseConfig = {
  apiKey: "AIzaSyDGd0OA06IwHiexg9mGGj9txMTF1ZdhM7s",
  authDomain: "projectmanagementtool-628da.firebaseapp.com",
  projectId: "projectmanagementtool-628da",
  storageBucket: "projectmanagementtool-628da.appspot.com",
  messagingSenderId: "80620515495",
  appId: "1:80620515495:web:943405d20456d3a6c92b82",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
