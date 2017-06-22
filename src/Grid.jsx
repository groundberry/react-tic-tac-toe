import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import './Grid.css';

class Grid extends Component {

  renderCells() {
    const cells = [];
    for (let i = 0; i < 9; i += 1) {
      cells.push(
        <Cell
          onClick={this.props.onClickCell}
          index={i}
          value={this.props.board[i]}
          key={i}
        />,
      );
    }
    return cells;
  }

  render() {
    return (
      <div className="Grid">
        <div className="Grid-game">
          {this.renderCells()}
        </div>
        <h3>You play with {this.props.player}</h3>
      </div>
    );
  }
}

export default Grid;

Grid.propTypes = {
  player: PropTypes.string,
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCell: PropTypes.func.isRequired,
};

Grid.defaultProps = {
  player: null,
};
