import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  return (
    <div className = 'clueValue'>
      ${ props.clueObject.value }
    </div>
    )
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
