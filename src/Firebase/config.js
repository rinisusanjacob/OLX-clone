import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB7MRPuSm-umpyD87vqQc-2NIRtx7tCa5A",
    authDomain: "olx-clone-7f84b.firebaseapp.com",
    projectId: "olx-clone-7f84b",
    storageBucket: "olx-clone-7f84b.appspot.com",
    messagingSenderId: "287000788465",
    appId: "1:287000788465:web:7e35039d5693274a90d850",
    measurementId: "G-J4GGTHN9ZG"
  };
 export default firebase.initializeApp(firebaseConfig)

