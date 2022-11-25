import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import seed files
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC-q4D1Sb9Z-a-vTrzcrfIqYpGC9k4-E_4",
  authDomain: "instagram-ai.firebaseapp.com",
  projectId: "instagram-ai",
  storageBucket: "instagram-ai.appspot.com",
  messagingSenderId: "619871278904",
  appId: "1:619871278904:web:8017625d0849ff748253cd"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// calling seed files (ONCE!!!)
// seedDatabase(firebase);

export {firebase, FieldValue};