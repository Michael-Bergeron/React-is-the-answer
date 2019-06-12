import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
      
    };
  }
  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }

  selectQuestion() {
    return 'hello'
  }

  render() {
    return (
      <div id={'app'}>
        What is Reactor 2?
        <Gameboard 
          currentQuestion = { this.state.currentQuestion }
          selectQuestion = { this.selectQuestion.bind(this) }
          categories = { this.state.results }
          answeredQuestions = { this.state.answeredQuestions }
          />
        {/* Scoreboard */}
        {/* Response */}
      </div>
    );
  }
}
