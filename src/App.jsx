import React, { Component } from 'react';
import Grid from './Grid';
import Options from './Options';
import {
  selectUserOption,
  selectCell,
  computerSelectCell,
  startGame,
} from './actions';
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
      winner: null,
    };

    this.handleClickSelectUserOption = this.handleClickSelectUserOption.bind(this);
    this.chooseX = this.handleClickSelectUserOption.bind(this, 'X');
    this.chooseO = this.handleClickSelectUserOption.bind(this, 'O');
    this.handleOnClickCell = this.handleOnClickCell.bind(this);
    this.handleClickStartGame = this.handleClickStartGame.bind(this);
    this.gameWinner = this.gameWinner.bind(this);
    this.renderWinner = this.renderWinner.bind(this);
  }

  hasChosen() {
    return this.state.userOption != null;
  }

  handleClickSelectUserOption(option) {
    this.setState(selectUserOption.bind(null, option));
  }

  handleOnClickCell(index) {
    const { winner } = this.state;

    if (winner != null) {
      return;
    }

    this.setState(selectCell.bind(null, index));
    setTimeout(() => {
      this.setState(computerSelectCell);
    }, 1000);
  }

  handleClickStartGame() {
    this.setState(startGame.bind(this));
  }

  gameWinner() {
    const { winner } = this.state;

    if (winner != null) {
      return `${winner} win!`;
    }
    return "It's a draw!";
  }

  renderWinner() {
    const { winner } = this.state;

    if (winner != null) {
      return this.gameWinner();
    }
    return '';
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
              onClickStartGame={this.handleClickStartGame}
              winner={this.renderWinner()}
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
