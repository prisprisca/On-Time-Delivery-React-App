import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landpage from "./components/Landpage" 
import UserSignup from "./components/UserSignup"

import Aboutus from "./components/Aboutus"
import OrderForm from "./components/OrderForm"
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landpage} />
        <Route path="/signup" component={UserSignup} />
        <Route path="/auth" component={Auth} />
        <Route path="/about" component={Aboutus} />
        <Route path="/orderform" component={OrderForm} />
      </Switch>
     
    </Router>
  );
}

export default App;
