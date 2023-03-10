import styles from "../components/Login.module.css";
import {singIn, singInWithGoogle} from "../authService/firebaseAuthService"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {errorMessageHandler} from '../errorHandler/errorMiddleware'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState(null)

 async function onLoginClick(){
    const response = await singIn(email, password)

    if(response.hasOwnProperty("message")){
      let errors = errorMessageHandler(response.message)
      setErrorMessages(errors)
    }
    if(response.hasOwnProperty("user")){
      navigate("/")
    }

  }


  async function onGoogleClick() {
    singInWithGoogle();
    navigate("/");
  }

  return (
    <>
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
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <br />
          <button className={styles.submitButton} type="button" onClick={() => onLoginClick(email, password)}>
            <span />
            LOGIN{" "}
          </button>
          <button className={styles.submitButton} type="button" onClick={onGoogleClick}>
            <span />
            LOGIN WITH GOOGLE{" "}
          </button>
          <p className={styles.noaccount}>Don't have an account ? <a href="/register">Create one</a></p>
        </form>
      </div>
    </>
  );
}
export default Login