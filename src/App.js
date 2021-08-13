import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { useState } from "react";

import { LoginContext } from "./Helper/Context";
import { SignupContext } from "./Helper/Context";
import { HomeContext } from "./Helper/Context";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [Homee, setHome] = useState(false);
  

  return (
    <Router >
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <SignupContext.Provider value={{ signUp, setSignUp }}>
        <HomeContext.Provider value={{ Homee, setHome }}>
        
          <Switch>
            
              
            <Route exact path="/" component={Login} />
              
             

            <Route exact  path="/Home" component={ Home }/>

            <Route exact  path="/Sign-up" component={Signup}/>

           

          </Switch>
          
        </HomeContext.Provider>
      </SignupContext.Provider>
     </LoginContext.Provider>
     </Router>
    
  );
}

export default App;
