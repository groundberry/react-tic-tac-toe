import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import './Grid.css';

function Grid(props) {
  return (
    <div className="Grid">
      <div className="Grid-game">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <h3>You play with {props.player}</h3>
    </div>
  );
}

export default Grid;

Grid.propTypes = {
  player: PropTypes.string.isRequired,
};
