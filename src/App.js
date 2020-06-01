import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import List from './components/List.js';
import Note from './components/Note.js';
import axios from 'axios';
import urlFor from './helpers/urlFor.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {}
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote
    });
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({ notes: res.data }) )
    .catch((err) => console.log(err.response.data) );
  }

  getNote = (id) => {
    console.log('Clicked!' + id);
  }

  render() {
    const { showNote, notes } = this.state;

    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} />
        { showNote ? 
          <Note /> 
          : 
          <List 
            getNotes={this.getNotes}  
            notes={notes} 
            getNote={this.getNote}
          /> 
        }
      </div>
    );
  }
}

export default App;