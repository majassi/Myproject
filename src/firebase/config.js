import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHqcmpWmLNXiLp7F_lk9UXhGWL0LjBPs",
  authDomain: "live-chat-room-819e8.firebaseapp.com",
  projectId: "live-chat-room-819e8",
  storageBucket: "live-chat-room-819e8.appspot.com",
  messagingSenderId: "1072031011073",
  appId: "1:1072031011073:web:4039a16047ae9090d5cb00",
  measurementId: "G-D33CL08T39"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }

