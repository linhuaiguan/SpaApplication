import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyDh_HI0GER9QTnKVw8RCIjqLQzBCsgvHog",
    authDomain: "auth-development-9fac0.firebaseapp.com",
    databaseURL: "https://auth-development-9fac0.firebaseio.com",
    projectId: "auth-development-9fac0",
    storageBucket: "auth-development-9fac0.appspot.com",
    messagingSenderId: "877768557604",
    appId: "1:877768557604:web:161208129844ea3c4504b1"
})

export const auth = app.auth()
export default app