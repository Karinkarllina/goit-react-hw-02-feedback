import React, { Component } from 'react';
import { Statistics } from './Statistic/Statistics';
import { SectionTitle } from './Section/Section';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import css from './App.module.css'


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
      <div className={css.mainWrap}>
        <SectionTitle title={'Please leave feedback'}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}/>
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
          />
        </SectionTitle>
      </div>
    );
  }
}