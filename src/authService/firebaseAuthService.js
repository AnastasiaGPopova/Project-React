import { auth, googleProvider, db } from "../server/fire-base configuration"
import { createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { collectiona, addDoc, collection } from "firebase/firestore";

export const singInWithGoogle = async () => {
    try {
     const user = await signInWithPopup(auth, googleProvider);
     addDoc(collection(db, "users"), {email: user.user.email, id: user.user.uid})
     return
     
    } catch (err) {
      console.error(err.message);
    }
  };

  export const singIn = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return 

    } catch (err) {
      console.error(err);
      return err
    }
  };

export const singUp = async (email, password, rePassword) => {
    try {
      if (password !== rePassword) {
        throw new Error(`Passwords do not match!`);
      }

      if (!email || !password || !rePassword) {
        throw new Error(`All fields are requiered!`);
      }
      
      const user = await createUserWithEmailAndPassword(auth, email, password);
      addDoc(collection(db, "users"), {email: user.user.email, id: user.user.uid})
      return user

    } catch (err) {
      console.error(err);
      return err
    }
  };

export const logOut = async() =>{
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

