import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue'

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      <div data-testid="catetoryTitle" className="categoryTitle">{ props.title.toUpperCase() }</div>
      { props.clues.map(clue => 
        <Clue
          clueObject = { clue }
          selected = { false }
          selectQuestion = { props.selectQuestion }
          answered = { props.answeredQuestions.indexOf(clue.id) !== -1 } 
          key = { clue.id }  
        />
        )}
      {/* display category */}
      {/* display clues for each category */}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
