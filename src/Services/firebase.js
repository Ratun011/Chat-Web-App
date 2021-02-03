import React from 'react';
//import * as firebase from 'firebase';
import firebase from 'firebase';
//import firebase from '@firebase/app';
//require('firebase/auth');


var firebaseConfig = {
    apiKey: "AIzaSyDggkiN-MhnaadlHiwwny-qcLqJSoUl_NI",
    authDomain: "wetalk-c8399.firebaseapp.com",
    projectId: "wetalk-c8399",
    storageBucket: "wetalk-c8399.appspot.com",
    messagingSenderId: "733613144043",
    appId: "1:733613144043:web:99acb0e9352c8ff8578bae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;