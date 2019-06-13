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
      userResponse: ''
      
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
      let oldScores = [...this.state.score];
      let newScore = this.state.score[this.state.currentPlayer];
      if (this.state.userResponse.toLowerCase() === this.state.currentQuestion.answer.toLowerCase()) {
        newScore += this.state.currentQuestion.value || 1000;
      } else {
        newScore -= this.state.currentQuestion.value || 1000;
      }
      oldScores[this.state.currentPlayer] = newScore;
      this.setState({ currentQuestion: {}, score: oldScores });
  }

  addPlayer() {
    this.setState({ score: [0,0,0] })
    console.log(this.state.score)
  }

  render() {
    return (
      <div id={'app'}>
        <Gameboard 
          currentQuestion = { this.state.currentQuestion }
          selectQuestion = { this.selectQuestion.bind(this) }
          categories = { this.state.results }
          answeredQuestions = { this.state.answeredQuestions }
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
