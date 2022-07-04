import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonNext from './ButtonNext';
import { actSetNext } from '../../redux/actions';

import './QuestionCard.css';
import Timer from './Timer';

const QuestionCard = ({ question }) => {
  const [clicked, setClicked] = useState(false);
  const responseCode = useSelector((state) => state.game.response_code);

  const dispatch = useDispatch();

  const randomSort = 0.5;

  const answers = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort(() => randomSort - Math.random());

  const handeOnClick = () => {
    setClicked(true);
  };

  const handeOnClickNext = () => {
    const next = responseCode + 1;
    const number = 5;
    if (next < number) {
      dispatch(actSetNext(next));
      setClicked(false);
    }
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
            id="btn-answer"
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
      {clicked && <ButtonNext onClick={ handeOnClickNext } />}
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
