import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import List from './components/List.js';
import Note from './components/Note.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote
    });
  }

  getNotes = () => {
    axios.get('https://note-api-ccrow.herokuapp.com/notes')
    .then((res) => console.log(res.data) )
    .catch((err) => console.log(err.response.data) );
  }

  render() {
    const { showNote } = this.state;

    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} />
        { showNote ? <Note /> : <List getNotes={this.getNotes} /> }
      </div>
    );
  }
}

export default App;