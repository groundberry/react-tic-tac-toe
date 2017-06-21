import React, { Component } from 'react';
import Grid from './Grid';
import Options from './Options';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      userOption: '',
      cellClicked: null,
    };

    this.addOption = this.addOption.bind(this);
    this.chooseX = this.addOption.bind(this, 'X');
    this.chooseO = this.addOption.bind(this, 'O');
    this.selectCell = this.selectCell.bind(this);
  }

  hasChosen() {
    return (this.state.userOption) !== '';
  }

  addOption(option) {
    this.setState({
      userOption: this.state.userOption + option,
    });
  }

  selectCell() {
    this.setState({
      cellClicked: this.state.userOption,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
          {this.hasChosen()
            ? <Grid player={this.state.userOption} onClickCell={this.selectCell} />
            : <Options onClickChooseX={this.chooseX} onClickChooseO={this.chooseO} />
          }
        </div>
      </div>
    );
  }
}

export default App;
