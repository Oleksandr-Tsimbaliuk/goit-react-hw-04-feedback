// import React, { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleBtn = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     // return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.state.good
//       ? Math.round((this.state.good * 100) / this.countTotalFeedback())
//       : 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleBtn}
//           ></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               goodPrtge={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </>
//     );
//   }
// }

import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedBack = ['good', 'neutral', 'bad'];

  const handleBtn = option => {
    if (option === 'good') setGood(prev => prev + 1);
    if (option === 'neutral') setNeutral(prev => prev + 1);
    if (option === 'bad') setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedBack}
          onLeaveFeedback={handleBtn}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            goodPrtge={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
