import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2BluDNmUeXNvIf0K2XUYLqOqV8ZBGFwk",
    authDomain: "crwnfit-6917c.firebaseapp.com",
    projectId: "crwnfit-6917c",
    storageBucket: "crwnfit-6917c.appspot.com",
    messagingSenderId: "437963651322",
    appId: "1:437963651322:web:ef68a03e3432db076eb143",
    measurementId: "G-866DR8CES6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;