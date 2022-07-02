import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';
import HeaderGame from '../components/layout/HeaderGame';
import QuestionCard from '../components/game/QuestionCard';
import { fetchQuestions } from '../redux/actions';
import GetToken from '../helpers/GetToken';

const Game = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [actualQuestion, setActualQuestion] = useState();
  const questions = useSelector((state) => state.game.results);
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();

  useEffect(() => {
    if (questions) {
      setIsLoading(false);
      setActualQuestion({
        ...questions[0],
      });
    } else {
      setIsLoading(true);
      dispatch(fetchQuestions(GetToken()));
    }
  }, [dispatch, questions]);

  return (
    <>
      { token === 'INVALID_TOKEN' && <Redirect to="/" /> }
      <div id="game-page">
        <HeaderGame />
        <h1>Game</h1>
        {
          isLoading
            ? <h2>Carregando...</h2>
            : <QuestionCard actualQuestion={ actualQuestion } />
        }
      </div>
    </>
  );
};

export default Game;
