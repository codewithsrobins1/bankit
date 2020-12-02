import React from 'react';
import './App.css';
import { Navbar }  from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
