import { auth, googleProvider } from "../server/fire-base configuration"
import { createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


export const singInWithGoogle = async () => {
    try {
     const user= await signInWithPopup(auth, googleProvider);
     return user
     
    } catch (err) {
      console.error(err.message);
    }
  };

export const singIn = async (email, password, rePassword) => {
    try {

      if(password !== rePassword){
        throw new Error (`Passwords do not match!`)
      }

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

