import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landpage from "./components/Landpage" 
import UserSignup from "./components/UserSignup"
import UserLogin from "./components/UserLogin"
import Aboutus from "./components/Aboutus"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/signup" component={UserSignup} />
        <Route path="/login" component={UserLogin} />
        <Route path="/about" component={Aboutus} />
      </Switch>
     
    </Router>
  );
}

export default App;
