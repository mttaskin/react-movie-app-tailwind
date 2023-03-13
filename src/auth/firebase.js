import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: process.REACT_APP_apiKey,
    authDomain: process.REACT_APP_authDomain,
    projectId: process.REACT_APP_projectId,
    storageBucket: process.storageBucket,
    messagingSenderId: process.REACT_APP_messagingSenderId,
    appId: process.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
