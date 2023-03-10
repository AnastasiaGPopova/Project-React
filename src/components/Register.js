import styles from "../components/Register.module.css";

import { singInWithGoogle, singUp } from "../authService/firebaseAuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  async function onRegisterClick(email, password, rePassword) {
    try {
      if (password !== rePassword) {
        throw new Error(`Passwords do not match!`);
      }

      const user = await singUp(email, password);
      console.log(user);

    } catch (error) {
      console.log(error);
    }

    navigate("/");
  }

  async function onGoogleClick() {
    singInWithGoogle();
    navigate("/");
  }

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
        <button
          className={styles.submitButton}
          type="button"
          onClick={() => onRegisterClick(email, password, rePassword)}
        >
          {" "}
          <span /> REGISTER{" "}
        </button>
        <button
          className={styles.submitButton}
          type="button"
          onClick={onGoogleClick}
        >
          {" "}
          <span /> LOGIN IN WITH GOOGLE{" "}
        </button>
      </form>
    </div>
  );
}

export default Register;
