import React, { Component } from "react";


import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';


class App extends Component {

  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (statName) => {

    this.setState((prevState) => { 
      const prevValue = prevState[statName];
      return {
        [statName]: prevValue + 1
       }
      
    })
  }

  countTotalFeedback = () => { 
    const values = Object.values(this.state);

    const total = values.reduce((acum, value) => acum + value);
   
    return total;
  }
  
  countPositiveFeedbackPercentage = () => {
   const total = this.countTotalFeedback()
    const {good} = this.state
    if (!total) {
      return 0
    }
    const percentage = good * 100 / total;
    
    return percentage;
  }
  
  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
  
        return (
            <div className='App'>
                
            <Section title='Please leave feedback'>
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
              {total ? (<Statistics title='Statistics'
                {...this.state}
                total={total}
                positivePersentage={percentage}
              />)
                : (<Notification message="No feedback given" />)}

            </Section> 
          </div>
        );
  }
}

export default App;


