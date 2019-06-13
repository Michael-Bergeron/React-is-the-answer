import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = props => {
  return (
    <>
      {props.score.length > 2 ? (
        <>
          <div id={'scoreboard'} className = 'player1' data-testid="scoreboard">
            <p className = 'playerName'>Player 1 - press "z"</p>
            <div>${props.score[1]}</div>
          </div>
          <div id={'scoreboard'} className = 'player2' data-testid="scoreboard">
             <p className = 'playerName'>Player 2 - press "m"</p>
              ${props.score[2]}
          </div>
         </>) : 
        (
        <>
         <div id={'scoreboard'} data-testid="scoreboard">
           <p className = 'playerName'>Player 1</p>
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
