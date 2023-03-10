import styles from "../components/Login.module.css";
import {singIn, singInWithGoogle} from "../authService/firebaseAuthService"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 async function onLoginClick(){
    const user = await singIn(email, password)
    navigate("/")
  }


  async function onGoogleClick() {
    singInWithGoogle();
    navigate("/");
  }

  return (
    <>
      {/* Hello world */}
      <div className={styles.hero}>
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
        </form>
      </div>
    </>
  );
}
export default Login