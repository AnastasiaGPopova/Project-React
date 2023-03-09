import styles from "../components/Login.module.css";
import {singInWithGoogle, singIn, logOut} from "../authService/firebaseAuthService"
import { useState } from "react";

function Login() {
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
            />
            <br />
          </div>
          <br />
          <button className={styles.submitButton} type="button">
            <span />
            LOGIN{" "}
          </button>
        </form>
      </div>
    </>
  );
}
export default Login