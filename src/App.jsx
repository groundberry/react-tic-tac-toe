import React, { Component } from 'react';
import Grid from './Grid';
import Options from './Options';
import {
  selectUserOption,
  selectComputerOption,
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
      cellClicked: null,
    };

    this.handleClickSelectUserOption = this.handleClickSelectUserOption.bind(this);
    this.chooseX = this.handleClickSelectUserOption.bind(this, 'X');
    this.chooseO = this.handleClickSelectUserOption.bind(this, 'O');
    this.selectCell = this.selectCell.bind(this);
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

  selectCell(index) {
    const grid = this.state.grid.slice();
    grid[parseInt(index, 10)] = this.state.userOption;
    this.setState({
      grid,
      cellClicked: this.state.userOption,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
          {this.hasChosen()
            ? <Grid
              player={this.state.userOption}
              onClickCell={this.selectCell}
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
