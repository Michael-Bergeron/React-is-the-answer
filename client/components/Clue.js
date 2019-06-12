import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  return (
    <>
    {props.answered ? 
      (<div className = 'clueValue' data-testid="clue"></div>) :
      (<div className = 'clueValue' data-testid="clue" onClick = {() => props.selectQuestion(props.clueObject)}>
        ${ props.clueObject.value ? props.clueObject.value : 1000}
      </div>) 
    }
   </>
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
