import React from 'react';
import Sidebar from './components/Login/Sidebar';
import Home from './components/Login/Home';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;