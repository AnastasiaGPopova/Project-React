import { auth, googleProvider } from "../server/fire-base configuration"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

  console.log(auth?.currentUser);

export const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

export const singIn = async (email, password) => {
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

