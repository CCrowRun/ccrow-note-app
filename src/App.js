import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import List from './components/List.js';
import Note from './components/Note.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Note />
    </div>
  );
}

export default App;