import React, { Component } from 'react';
import Grid from './Grid';
import Options from './Options';
import {
  selectUserOption,
  selectComputerOption,
  selectCell,
  computerSelectCell,
} from './actions';
import {
  checkWinner,
} from './utils';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [
        null, null, null,
        null, null, null,
        null, null, null,
      ],
      userOption: null,
      computerOption: null,
    };

    this.handleClickSelectUserOption = this.handleClickSelectUserOption.bind(this);
    this.chooseX = this.handleClickSelectUserOption.bind(this, 'X');
    this.chooseO = this.handleClickSelectUserOption.bind(this, 'O');
    this.handleOnClickCell = this.handleOnClickCell.bind(this);
  }

  hasChosen() {
    return this.state.userOption != null;
  }

  handleClickSelectUserOption(option) {
    this.setState(selectUserOption.bind(null, option));
    setTimeout(() => {
      this.setState(selectComputerOption);
    }, 1000);
  }

  handleOnClickCell(index) {
    this.setState(selectCell.bind(null, index));
    setTimeout(() => {
      this.setState(computerSelectCell);
    }, 1000);
  }

  gameWinner() {
    const { grid } = this.state;
    const winner = checkWinner(grid);

    if (winner != null) {
      return `${winner} win!`;
    }
    return "It's a draw!";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
          {this.hasChosen()
            ? <Grid
              player={this.state.userOption}
              onClickCell={this.handleOnClickCell}
              board={this.state.grid}
            />
            : <Options
              onClickChooseX={this.chooseX}
              onClickChooseO={this.chooseO}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
