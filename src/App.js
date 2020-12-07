import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage } from './pages/SignInPage';
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
      </Switch>

    </Router>
  );
}

export default App;
