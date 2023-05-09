import React, { Component } from 'react';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  addFeedback = (event) => {
    const stateName = event.currentTarget.name;
    this.setState((prevState) => ({ [stateName]: prevState[stateName] + 1 
    })
    ) 
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
          <button name = 'good' type='button'onClick={this.addFeedback}>Good</button>
          <button name = 'neutral' type='button'onClick={this.addFeedback}>Neutral</button>
          <button name = 'bad' type='button'onClick={this.addFeedback}>Bad</button>
        </div>
        <p>Statistics</p>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        />
      </section>
    );
  }
}