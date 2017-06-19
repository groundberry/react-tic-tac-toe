import React, { Component } from 'react';
import Grid from './Grid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
