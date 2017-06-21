import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

function Cell(props) {
  return (
    <button className="Cell" onClick={props.onClick}>
    </button>
  );
}

export default Cell;

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
};
