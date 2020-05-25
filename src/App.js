import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import List from './components/List.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
    </div>
  );
}

export default App;