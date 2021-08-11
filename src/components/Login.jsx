import React, { useContext, useState } from "react";
import "../App.css";
import { LoginContext } from "../Helper/Context";
import { SignupContext } from "../Helper/Context";
import { HomeContext } from "../Helper/Context";

function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { signUp, setSignUp } = useContext(SignupContext);
  const { Homee, setHome } = useContext(HomeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailflag, setEmailFlag] = useState(false);
  const [passwordflag, setPassWordFlag] = useState(false);

  const emailbox = (
    <>
      <div className="login-valid-box">
        Email should be of format saikumar9182@gmail.com
      </div>
    </>
  );

  const passwordbox = (
    <div className="login-valid-box">
      Password should contain a small, a capital, a special character and a
      digit. It should be above length 5
    </div>
  );

  function emailInputHandler(e) {
    setEmail(e.target.value);
    setEmailFlag(false);
  }
  function passwordInputHandler(e) {
    setPassword(e.target.value);
    setPassWordFlag(false);
  }
  function buttonHandler(e) {
    e.preventDefault();

    if (!/^[^\s@#$%^&*()!]+@[^\s@#$%^&*()!]+\.[^\s@#$%^&*()!]+$/g.test(email)) {
      setEmailFlag(true);
      console.log(emailflag);
      return;
    } else if (
      /^.*(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*()])[a-zA-Z0-9!@#$%]+$/.test(
        password
      ) == false
    ) {
      setPassWordFlag(true);
      console.log(passwordflag, "hi");

      return;
    }

    setHome(true);

    setLoggedIn(false);

    setSignUp(false);
  }
  return (
    <>
      <div className="login-container flex height-class">
        <h1 style={{ textAlign: "center" }}>Log into MovieApp</h1>
        <form class="flex login-form" action="">
          <input
            onChange={emailInputHandler}
            placeholder="Email Address"
            type="email"
            id="email"
            name="email"
            class="login-input"
          />
          {emailflag ? emailbox : ""}

          <input
            onChange={passwordInputHandler}
            placeholder="Password"
            type="password"
            id="pwd"
            name="pwd"
            class="login-input"
          />
          {passwordflag ? passwordbox : ""}
          <button type="submit" onClick={buttonHandler}>
            Login
          </button>
        </form>

        <h3
          onClick={() => {
            setLoggedIn(false);
            setHome(false);
            setSignUp(true);
          }}
          style={{ cursor: "pointer" }}
          className="sign-up-heading"
        >
          New User? Sign up
        </h3>
      </div>
    </>
  );
}

export default Login;
