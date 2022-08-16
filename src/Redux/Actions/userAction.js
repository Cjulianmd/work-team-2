import { userTypes } from "../Types/userTypes";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider } from "firebase/auth";
// import { google } from "../../Firebase/firebaseConfig";
import  {googleProvider} from '../../firebase';
import {auth} from "../../firebase"




// Inicio y registro con  Google
export const loginGoogle = () => {
    return (dispatch) => {
        
        signInWithPopup( auth, googleProvider )
        .then( ({user: {displayName, email, photoURL}}) => dispatch(loginProvider({displayName, email, photoURL})) )
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
}

export const loginProvider = ( user ) => {
    return {
        type: userTypes.login,
        payload: user
    }
}


// Registro de usuario con email y contraseña
export const registerWithEmail = ( email, password, name ) => {
    return(dispatch) => {
       
        createUserWithEmailAndPassword( auth, email, password )
        .then(async ()=> {
            await updateProfile(auth.currentUser, { displayName: name })
            dispatch(registerSync({email, name}))
        } )
    }
}

const registerSync = ( user ) => {
    return {
        type: userTypes.register,
        payload: user
    }
}

// Inicio de sesion con email
export const LoginWithEmail = (email, password) => {
    return(dispatch) => {
       
        signInWithEmailAndPassword(auth, email, password)
        .then(({user: {displayName, email, photoURL }}) => dispatch(loginSync({ displayName, email, photoURL })))
        .catch(() => console.log("Usuario o contraseña invalida"))
    }
}

const loginSync = (user) => {
    console.log( user );
    return {
    type: userTypes.login,
    payload: user
    }
}