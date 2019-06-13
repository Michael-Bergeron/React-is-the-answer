import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = props => {
  return (
    <>
      {props.score.length > 2 ? (
        <>
          <h3 className = "player">Player 1</h3>
          <div id={'scoreboard'} data-testid="scoreboard">
            ${props.score[1]}
          </div>
          <h3 className = "player">Player 2</h3>
          <div id={'scoreboard'} data-testid="scoreboard">
              ${props.score[0]}
          </div>
         </>) : 
        (
        <>
         <div id={'scoreboard'} data-testid="scoreboard">
            ${props.score[1]}
          </div>
          <div id={'scoreboard'}><button onClick={() => props.addPlayer()}>Add Player 2</button></div>
         </>
      )}
    </>
  )
};

Scoreboard.propTypes = {
  score: PropTypes.array
}

export default Scoreboard;
