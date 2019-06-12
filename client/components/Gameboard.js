import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories'

const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? "question" : "gameboard"}>
    {props.currentQuestion.question ? 
      (<div>{props.currentQuestion.question}</div>) :
    (<Categories 
          currentQuestion = { props.currentQuestion }
          selectQuestion = { props.selectQuestion }
          categories = { props.categories }
          answeredQuestions = { props.answeredQuestions } />)}
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      
      {/* No? then show categories */}

    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
