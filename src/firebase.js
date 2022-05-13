import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCqYPSPlZqzcC9kvnNLi0vlyRLWFcJgKCw",
  authDomain: "tesla-clone-f6d1f.firebaseapp.com",
  projectId: "tesla-clone-f6d1f",
  storageBucket: "tesla-clone-f6d1f.appspot.com",
  messagingSenderId: "738384936262",
  appId: "1:738384936262:web:27ade482695cb61fa7b947"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
 






