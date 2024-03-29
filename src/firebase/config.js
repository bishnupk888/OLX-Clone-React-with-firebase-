
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAs8MelTYfVJWbk9WAsrPhsWcssNl_jipQ",
    authDomain: "olx-clone-d5d05.firebaseapp.com",
    projectId: "olx-clone-d5d05",
    storageBucket: "olx-clone-d5d05.appspot.com",
    messagingSenderId: "311163734778",
    appId: "1:311163734778:web:f64770bd4acaf72b18d743",
    measurementId: "G-MJ540G6N9H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log('Firebase initialized:', firebaseApp);

export default firebaseApp;