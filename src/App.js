import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { useState } from "react";

import { LoginContext } from "./Helper/Context";
import { SignupContext } from "./Helper/Context";
import { HomeContext } from "./Helper/Context";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [Homee, setHome] = useState(false);
  

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <SignupContext.Provider value={{ signUp, setSignUp }}>
        <HomeContext.Provider value={{ Homee, setHome }}>
          {loggedIn ? <Login /> : ""}
          {Homee ? <Home /> : ""}

          {signUp ? <Signup /> : ""}
        </HomeContext.Provider>
      </SignupContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
