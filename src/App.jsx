import React, { Component } from 'react';
import Grid from './Grid';
import Options from './Options';
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
      userOption: '',
    };

    this.addOption = this.addOption.bind(this);
    this.chooseX = this.addOption.bind(this, 'X');
    this.chooseO = this.addOption.bind(this, 'O');
  }

  hasChosen() {
    return (this.state.userOption) !== '';
  }

  addOption(option) {
    this.setState({
      userOption: this.state.userOption + option,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
          {this.hasChosen()
            ? <Grid player={this.state.userOption} />
            : <Options onClickChooseX={this.chooseX} onClickChooseO={this.chooseO} />
          }
        </div>
      </div>
    );
  }
}

export default App;
