import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDga-CWZ4OJGv3zn9C6QrtyQ8l-elHx0gg",
  authDomain: "tinder-clone-470fb.firebaseapp.com",
  projectId: "tinder-clone-470fb",
  storageBucket: "tinder-clone-470fb.appspot.com",
  messagingSenderId: "279157901951",
  appId: "1:279157901951:web:e898ae59c062c08587cd4a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;