import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBPW-qkFCYqYXvyfwuOKW8PUDBIhleMOaM",
  authDomain: "fushushu-8aa1b.firebaseapp.com",
  databaseURL: "https://fushushu-8aa1b.firebaseio.com",
  projectId: "fushushu-8aa1b",
  storageBucket: "fushushu-8aa1b.appspot.com",
  messagingSenderId: "586161280212",
  appId: "1:586161280212:web:a84b04006b644457e79741",
  measurementId: "G-4C3R2FEFQR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;