import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsOs8BX8sabIFaidFKyrSjVPekqOhIAOY",
  authDomain: "baba-azam.firebaseapp.com",
  projectId: "baba-azam",
  storageBucket: "baba-azam.appspot.com",
  messagingSenderId: "352526716902",
  appId: "1:352526716902:web:da084be1e4cb77671e5027",
  measurementId: "G-HZ4K1SS2H6"
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export {firebase} 