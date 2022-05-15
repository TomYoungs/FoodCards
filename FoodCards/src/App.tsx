import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';

function App() {
  return (
    <div className="App"id="outer-container">
      <div id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
        <Card />
      </div>
    </div>
  );
}

export default App;
