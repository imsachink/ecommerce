import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6q4rzo8xomVaXXm_f4ltfQzT8SEYnglg",
    authDomain: "ecomm-db-3ad55.firebaseapp.com",
    projectId: "ecomm-db-3ad55",
    storageBucket: "ecomm-db-3ad55.appspot.com",
    messagingSenderId: "300475527216",
    appId: "1:300475527216:web:9925f020b0def755393df5",
    measurementId: "G-GLLHN84PK0"
  };

  firebase.initializeApp(firebaseConfig);  
  export const createUserProfileDocument=async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
            displayName,createdAt,email,...additionalData})
      }catch (error){
        console.log('error creating user',error);
      }
    
    }
    return userRef;

  };

 export const auth = firebase.auth();
 export const firestore= firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);



 export default firebase;