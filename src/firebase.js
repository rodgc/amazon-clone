import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCowIngadTbbwiKrudfZna6mpVOZTgFIDI",
  authDomain: "clone-c402a.firebaseapp.com",
  databaseURL: "https://clone-c402a.firebaseio.com",
  projectId: "clone-c402a",
  storageBucket: "clone-c402a.appspot.com",
  messagingSenderId: "104283783228",
  appId: "1:104283783228:web:169580f5a4f94e3a254339",
  measurementId: "G-TJQLC3TLSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
