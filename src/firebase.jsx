// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD54S-s4HvNcO4vDNwmL3XH66i5OJguROw",
//   authDomain: "careerconnect-app.firebaseapp.com",
//   projectId: "careerconnect-app",
//   storageBucket: "careerconnect-app.appspot.com",
//   messagingSenderId: "16338459839",
//   appId: "1:16338459839:web:71d1980999f02d906dfa0a",
//   measurementId: "G-PYW556H99N"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const auth = getAuth();
// const storage = getStorage(app);
// const provider = new GoogleAuthProvider();

// export {auth, provider, storage}
// export default db

// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyD54S-s4HvNcO4vDNwmL3XH66i5OJguROw",
//     authDomain: "careerconnect-app.firebaseapp.com",
//     projectId: "careerconnect-app",
//     storageBucket: "careerconnect-app.appspot.com",
//     messagingSenderId: "16338459839",
//     appId: "1:16338459839:web:71d1980999f02d906dfa0a",
//     measurementId: "G-PYW556H99N"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig)
//   const db = firebase.firestore()
//   const auth = firebase.auth()
//   const provider = new firebase.auth.GoogleAuthProvider()
//   const storage = firebase.storage()

//   export { auth, provider, storage}
//   export default db

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD54S-s4HvNcO4vDNwmL3XH66i5OJguROw",
  authDomain: "careerconnect-app.firebaseapp.com",
  projectId: "careerconnect-app",
  storageBucket: "careerconnect-app.appspot.com",
  messagingSenderId: "16338459839",
  appId: "1:16338459839:web:71d1980999f02d906dfa0a",
  measurementId: "G-PYW556H99N"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;