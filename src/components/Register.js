import styles from "../components/Register.module.css";

import {singInWithGoogle, singIn, logOut} from "../authService/firebaseAuthService"
import { useState } from "react";

function Register() {
  return (
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
        <div className={styles.registerbox}>
          <label htmlFor="rePassword">
            <i className="fa-solid fa-repeat" /> Repeat password:
          </label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            placeholder="Repeate password..."
          />
          <br />
        </div>
        <button className={styles.submitButton} type="button">
          <span />
          REGISTER{" "}
        </button>
      </form>
    </div>
  );
}

export default Register;
