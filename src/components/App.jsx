import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
    
  }
  addFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
    
  }

  addFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
    
  }

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  
  countPositiveFeedbackPercentage = ({ good }) =>
    this.countTotalFeedback(this.state) ?
      Math.round((good * 100) / this.countTotalFeedback(this.state)) :
      0;


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <h1>Please leave feedback</h1>
        <div>
          <button type='button'onClick={this.addFeedbackGood}>Good</button>
          <button type='button'onClick={this.addFeedbackNeutral}>Neutral</button>
          <button type='button'onClick={this.addFeedbackBad}>Bad</button>
        </div>
        <p>Statistics</p>
        <div>
          <p>Good: <span>{good}</span></p>
          <p>Neutral: <span>{neutral}</span></p>
          <p>Bad: <span>{bad}</span></p>
          <p>Total: <span>{this.countTotalFeedback(this.state)}</span></p>
          <p>Positive Feedback: <span>{this.countPositiveFeedbackPercentage(this.state)}%</span></p>
        </div>
      </section>
    );
  }
}

