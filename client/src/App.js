import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { Dashboard } from './pages/Dashboard';
import { UserContext } from './context/UserContext';

function App() {
  // const [userData, setUserData ] = useState({}); 

  return (
    <Router>
      <UserContext.Provider value={{}}>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/signin" component={SignInPage} exact />
          <Route path="/signup" component={SignUpPage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
