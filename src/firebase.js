import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDwPTm9TNiHrQ_E3rU3jr7JS5F9GzcgwGQ",
    authDomain: "blog-auth-development.firebaseapp.com",
    projectId: "blog-auth-development",
    storageBucket: "blog-auth-development.appspot.com",
    messagingSenderId: "1035135404569",
    appId: "1:1035135404569:web:c153b04fad97ccaaaaf888"
});
export const auth = app.auth();
export default app;