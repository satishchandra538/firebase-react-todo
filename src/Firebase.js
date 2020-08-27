import firebase from 'firebase';
const firebaseConfig = {
  //Please use you own configuration
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// Get a reference to the database service
var db = firebase.firestore();

export {db};