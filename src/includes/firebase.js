import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6occTgPhlzZyI8X_I22-vAtu8pypxRww",
  authDomain: "music-app-aws.firebaseapp.com",
  projectId: "music-app-aws",
  storageBucket: "music-app-aws.appspot.com",
  appId: "1:464129772870:web:a40d025788fcb4d70a2947",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");
export {
  auth,
  db,
  userCollection,
  storage,
  songsCollection,
  commentsCollection,
};
