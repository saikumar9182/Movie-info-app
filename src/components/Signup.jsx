import React, { useState, useContext } from "react";
import "../App.css";
import { LoginContext } from "../Helper/Context";
import { SignupContext } from "../Helper/Context";
import { HomeContext } from "../Helper/Context";
import {Link} from 'react-router-dom';

function Signup() {
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameflag, setNameFlag] = useState(false);
  const [phoneflag, setPhoneFlag] = useState(false);

  const [emailflag, setEmailFlag] = useState(false);
  const [passwordflag, setPassWordFlag] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { signUp, setSignUp } = useContext(SignupContext);
  const { Homee, setHome } = useContext(HomeContext);
  const [loginflag,setLoginFlag]= useState(false);

  const loginbox=(
    <>
        <button>
          <Link style={{color:"green"}} to="/">
          Succesfully Signed up, Go to login page.
          </Link>
        </button>
  
      </>
    );



  const namebox = (
    <>
      <div className="login-valid-box">
        Name should contain only alpha-numeric characters and atleast 3
        characters length
      </div>
    </>
  );
  const phonebox = (
    <>
      <div className="login-valid-box">
        Number should start with either 7 or 8 or 9 and should have a length of
        10
      </div>
    </>
  );

  const emailbox = (
    <>
      <div style={{ textAlign: "center" }} className="login-valid-box">
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

  function FullNameHandler(e) {
    setFullName(e.target.value);
    setNameFlag(false);
  }

  function phoneHandler(e) {
    setPhone(e.target.value);
    setPhoneFlag(false);
  }

  function buttonHandler(e) {
    e.preventDefault();

    if (/^\w{3,}$/g.test(fullname) != true) {
      setNameFlag(true);
      return;
    } else if (/^[7-9]+\d{9}$/g.test(phone) != true) {
      setPhoneFlag(true);
      return;
    } else if (
      !/^[^\s@#$%^&*()!]+@[^\s@#$%^&*()!]+\.[^\s@#$%^&*()!]+$/g.test(email)
    ) {
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

    setLoginFlag(true);
    setHome(false);

    setLoggedIn(true);

    setSignUp(false);
  }
  return (
    <div class="login-container flex height-class">
      <h1 style={{ color: "white" }}>Sign-up Now</h1>

      <form class="flex login-form" action="">
        <input
          type="text"
          onChange={FullNameHandler}
          placeholder="Enter your Full Name"
          className="login-input"
        />
        {nameflag ? namebox : ""}

        <input
          type="text"
          onChange={phoneHandler}
          placeholder="Enter your Phone Number"
          className="login-input"
        />
        {phoneflag ? phonebox : ""}

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

        <Link style={{width:"100%"}} to="/Home">
        <button type="Sign-up" onClick={buttonHandler}>
          Sign-up
        </button>
        </Link>

        {loginflag? loginbox:""}



        <Link style={{width:"100%"}} to="/">
        <button
          onClick={() => {
            setHome(false);

            setLoggedIn(true);

            setSignUp(false);
          }}
          style={{ color: "red",width:"100%" }}
        >
          Go Back
        </button>
        </Link>

      </form>
    </div>
  );
}

export default Signup;
