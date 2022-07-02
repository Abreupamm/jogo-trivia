import React from 'react';
import PropTypes from 'prop-types';

const MultipleQuestion = ({ answers }) => (
  <div id="answer" data-testid="answer-options">
    <button
      type="button"
      id="correct-answer"
      data-testid="correct-answer"
    >
      { answers.correct_answer }
    </button>
    { answers.incorrect_answers.map((answer, index) => {
      const testid = `wrong-answer-${index}`;
      return (
        <button
          type="button"
          key={ index }
          id="correct-answer"
          data-testid={ testid }
        >
          { answer }
        </button>
      );
    })}

  </div>
);

MultipleQuestion.propTypes = {
  answers: PropTypes.shape().isRequired,
};

export default MultipleQuestion;
