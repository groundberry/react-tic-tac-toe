import React from 'react';
import PropTypes from 'prop-types';
import './Options.css';

function Options(props) {
  return (
    <div className="Options">
      <h2>What do you choose?</h2>
      <button className="Options-button" onClick={props.onClickChooseX}>X</button>
      <button className="Options-button" onClick={props.onClickChooseO}>O</button>
    </div>
  );
}

export default Options;

Options.propTypes = {
  onClickChooseX: PropTypes.func.isRequired,
  onClickChooseO: PropTypes.func.isRequired,
};
