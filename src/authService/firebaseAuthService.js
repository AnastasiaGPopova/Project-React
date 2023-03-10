import { auth, googleProvider } from "../server/fire-base configuration"
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";


export const singInWithGoogle = async () => {
    try {
     const user= await signInWithPopup(auth, googleProvider);
     return user
     
    } catch (err) {
      console.error(err.message);
    }
  };

  export const singIn = async (email, password) => {
    try {

      const user = await signInWithEmailAndPassword(auth, email, password);
      return user

    } catch (err) {
      console.error(err);
    }
  };

export const singUp = async (email, password) => {
    try {

      await createUserWithEmailAndPassword(auth, email, password);

    } catch (err) {
      console.error(err);
    }
  };

export const logOut = async() =>{
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

