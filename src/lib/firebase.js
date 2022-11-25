import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import seed files

const config = {};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// calling seed files (ONCE!!!)

export {firebase, FieldValue};