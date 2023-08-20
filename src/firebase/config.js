import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA2ehCTABSycBNJxDi3xbctN6DDLOQ6nS0",
    authDomain: "twitter-web-project.firebaseapp.com",
    projectId: "twitter-web-project",
    storageBucket: "twitter-web-project.appspot.com",
    messagingSenderId: "409561843713",
    appId: "1:409561843713:web:4808f6738c901a26401800"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //initialize different services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp 

  export { projectFirestore , projectAuth, projectStorage, timestamp}