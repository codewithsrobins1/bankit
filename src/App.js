import React from 'react';
import { Navbar }  from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <h1>HELLO</h1>
    </Router>
  );
}

export default App;
