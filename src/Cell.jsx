import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

class Cell extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <button className="Cell" onClick={this.handleClick}>
        <h2>{this.props.value}</h2>
      </button>
    );
  }
}

export default Cell;

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.string,
};

Cell.defaultProps = {
  value: null,
};
