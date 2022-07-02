import React from 'react';
import PropTypes from 'prop-types';

import BooleanQuestion from './BooleanQuestion';
import MultipleQuestion from './MultipleQuestion';

const QuestionCard = ({ actualQuestion }) => {
  const {
    type,
    category,
    question,
  } = actualQuestion;

  const answers = {
    correct_answer: actualQuestion.correct_answer,
    incorrect_answers: actualQuestion.incorrect_answers,
  };

  return (
    <div id="question-card">
      <h1 data-testid="question-category">
        { category }
      </h1>
      <p data-testid="question-text">
        { question }
      </p>
      <div id="answer">
        {
          type === 'multiple'
            ? <MultipleQuestion answers={ answers } />
            : <BooleanQuestion answers={ answers } />
        }
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  actualQuestion: PropTypes.shape({
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default QuestionCard;
