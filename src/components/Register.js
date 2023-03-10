import styles from "../components/Register.module.css";

import { singInWithGoogle, singUp } from "../authService/firebaseAuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {errorMessageHandler} from '../errorHandler/errorMiddleware'

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessages, setErrorMessages] = useState(null)


  async function onRegisterClick(email, password, rePassword) {
      const reponse = await singUp(email, password, rePassword);
      
      if(reponse.hasOwnProperty("message")){
        let errors = errorMessageHandler(reponse.message)
        setErrorMessages(errors)
      }
      if(reponse.hasOwnProperty("user")){
        navigate("/")
      }
  }

  async function onGoogleClick() {
    singInWithGoogle();
    navigate("/");
  }

  console.log(errorMessages)
  return (
    <div className={styles.hero}>
      
      {errorMessages && (
              <div className={styles.errorMsg}>
              <h1> Error Message:</h1>
              <p>{errorMessages}</p>
            </div>
      )}

      <form action="" method="">
        <div className={styles.registerbox}>
          <label htmlFor="email">
            <i className="fa-solid fa-envelope" /> Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Write you email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>

        <br />
        <div className={styles.registerbox}>
          <label htmlFor="password">
            <i className="fa-solid fa-lock" /> Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <br />
        <div className={styles.registerbox}>
          <label htmlFor="rePassword">
            <i className="fa-solid fa-repeat" /> Repeat password:{" "}
          </label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            value={rePassword}
            placeholder="Repeate password..."
            onChange={(e) => setRePassword(e.target.value)}
          />
          <br />
        </div>

        <button className={styles.submitButton} type="button" 
        onClick={() => onRegisterClick(email, password, rePassword)}>{" "}<span /> REGISTER{" "}
        </button>

        <button
          className={styles.submitButton}
          type="button"
          onClick={onGoogleClick}>{" "}<span /> LOGIN IN WITH GOOGLE{" "}
        </button>
        
        <p className={styles.noaccount}>Have an account ? <a href="/login">Click here</a></p>
      </form>
      
    </div>
  );
}

export default Register;
