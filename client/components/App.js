import React, { Component } from 'react';
import Gameboard from './Gameboard';
import Response from './Response';
import Scoreboard from './Scoreboard';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      currentQuestion: {},
      answeredQuestions: [],
      score: [0, 0],
      currentPlayer: 1,
      userResponse: '',
      multiplayerMode: false
    };

    this.selectQuestion = this.selectQuestion.bind(this);

    this.recordResponse = this.recordResponse.bind(this);

    this.submitResponse = this.submitResponse.bind(this);
  }
  componentDidMount() {
    fetch("http://jservice.io/api/categories?count=5")
      .then(res => res.json())
      .then(
        (result) => {
          // map results
          result.map(category => {
            fetch(`http://jservice.io/api/category?id=${category.id}`)
              .then(res => res.json())
              .then(clues => {
                this.setState({ results: this.state.results.concat(clues)});
              })
          })
        })
}

  selectQuestion(clueObject) {
    this.setState({ currentQuestion: clueObject });
    this.setState({ answeredQuestions: this.state.answeredQuestions.concat(clueObject.id) })
  }

  recordResponse(newText) {
    const letstryit = newText.target.value;
    this.setState({ userResponse: letstryit });
  }

  submitResponse(event) {
      // resting currentPlayer to 0 at every submission was causing issues
      // however, if going from single player to multiplayer, the first player who buzzes
      // in is the one who's score is perpetually updated
      
      let oldScores = [...this.state.score];
      let newScore = this.state.score[this.state.currentPlayer];
      if (this.state.userResponse.toLowerCase() === this.state.currentQuestion.answer.toLowerCase()) {
        newScore += this.state.currentQuestion.value || 1000;
      } else {
        newScore -= this.state.currentQuestion.value || 1000;
      }
      oldScores[this.state.currentPlayer] = newScore;
      const resetPlayer = this.state.multiplayerMode ? 0 : 1;
      this.setState({ currentQuestion: {}, score: oldScores, currentPlayer: resetPlayer});
  }

  addPlayer() {
    this.setState({ score: [0,0,0], multiplayerMode: true , currentPlayer: 0, answeredQuestions: []});
  }

  setPlayer(newPlayer) {
    if (newPlayer !== 0 && this.state.currentPlayer === 0) {
      this.setState({ currentPlayer: newPlayer });
    }
  }

  render() {
    // on key press, remove listener to prevent listener added at at every re-rendering?
    window.addEventListener('keydown', function(event) {
      if (this.state.multiplayerMode) {
        let newPlayer = 0;
        if (event.keyCode === 90) {
          newPlayer = 1;
        } else if (event.keyCode === 77) {
          newPlayer = 2;
        }
        this.setPlayer(newPlayer);
      }
    }.bind(this));

    return (
      <div id={'app'}>
        <Gameboard 
          currentQuestion = { this.state.currentQuestion }
          selectQuestion = { this.selectQuestion.bind(this) }
          categories = { this.state.results }
          answeredQuestions = { this.state.answeredQuestions }
          multiplayerMode = { this.state.multiplayerMode }
          setPlayer = { this.setPlayer.bind(this) }
          />
        <Scoreboard 
        score = {this.state.score}
        addPlayer = {this.addPlayer.bind(this)}
        />
        <Response 
          recordResponse = {this.recordResponse}
          submitResponse = {this.submitResponse}
        /> 
      </div>
    );
  }
}
