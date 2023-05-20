import React from 'react';
import { FeedbackList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </FeedbackList>
  );
};
