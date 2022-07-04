import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getToken, removeToken } from '../utils';
import { fetchTriviaQuestions } from '../services/triviaAPI';
import { actSetQuestions } from '../redux/actions';

import HeaderGame from '../components/layout/HeaderGame';
import QuestionCard from '../components/game/QuestionCard';

const Game = () => {
  const questions = useSelector((state) => state.game.results);
  const code = useSelector((state) => state.game.indexQuestion);
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();

    fetchTriviaQuestions(token).then(
      (response) => {
        if (response.response_code === 0) {
          dispatch(actSetQuestions(response));
        } else {
          removeToken();
          setLogout(true);
        }
      },
    ).catch(
      (error) => {
        console.error(error);
        removeToken();
        setLogout(true);
      },
    );
  }, [dispatch]);

  return (
    <>
      { logout && <Redirect to="/" /> }
      <HeaderGame />
      <div id="game-page">
        <h1>Game</h1>
        { questions && <QuestionCard question={ questions[code] } /> }
      </div>
    </>
  );
};

export default Game;
