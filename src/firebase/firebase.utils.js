import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2Kggdy82WrUVvQUaDvM1ejysTnOR0vNI",
  authDomain: "e-commerce-15c1b.firebaseapp.com",
  databaseURL: "https://e-commerce-15c1b.firebaseio.com",
  projectId: "e-commerce-15c1b",
  storageBucket: "e-commerce-15c1b.appspot.com",
  messagingSenderId: "457723456900",
  appId: "1:457723456900:web:a414e73f164a8dd641c1d1",
  measurementId: "G-TS9YV1PPYE",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
