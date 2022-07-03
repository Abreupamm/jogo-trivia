import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './QuestionCard.css';
import Timer from './Timer';

const QuestionCard = ({ question }) => {
  const [clicked, setClicked] = useState(false);
  const randomSort = 0.5;
  const answers = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort(() => randomSort - Math.random());

  const handeOnClick = () => {
    setClicked(true);
    console.log('true');
  };

  const addStyle = (answer) => {
    if (question.correct_answer === answer) {
      return 'correct';
    }
    return 'incorrect';
  };
  const timeOut = useSelector((state) => state.game.timeOut);

  return (
    <div id="question-card">
      <Timer />
      <h1 data-testid="question-category">
        { question.category }
      </h1>
      <p data-testid="question-text">
        { question.question }
      </p>
      <div id="answers" data-testid="answer-options">
        { answers.map((answer, index) => (
          <button
            className={ clicked ? addStyle(answer) : 'response' }
            type="button"
            key={ index }
            disabled={ timeOut }
            data-testid={
              question.correct_answer.includes(answer)
                ? 'correct-answer'
                : `wrong-answer=${index}`
            }
            onClick={ handeOnClick }
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
