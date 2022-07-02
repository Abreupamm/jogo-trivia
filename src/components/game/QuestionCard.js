import React from 'react';
import PropTypes from 'prop-types';

// import BooleanQuestion from './BooleanQuestion';
// import MultipleQuestion from './MultipleQuestion';

const QuestionCard = ({ question }) => {
  const randomSort = 0.5;
  const answers = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort(() => randomSort - Math.random());

  return (
    <div id="question-card">
      <h1 data-testid="question-category">
        { question.category }
      </h1>
      <p data-testid="question-text">
        { question.question }
      </p>
      <div id="answers" data-testid="answer-options">
        { answers.map((answer, index) => (
          <button
            type="button"
            key={ index }
            data-testid={
              question.correct_answer.includes(answer)
                ? 'correct-answer'
                : `wrong-answer=${index}`
            }
          >
            { answer }
          </button>
        )) }
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default QuestionCard;
