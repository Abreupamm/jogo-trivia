import { fetchTriviaQuestions } from '../../services/triviaAPI';

const SET_QUESTIONS = 'SET_QUESTIONS';
const SET_TIMEOUT = 'SET_TIMEOUT';

const actSetQuestions = (payload) => ({
  type: SET_QUESTIONS,
  payload,
});

const actSetTimeOut = (payload) => ({
  type: SET_TIMEOUT,
  payload,
});

const fetchQuestions = (token) => async (dispatch) => {
  fetchTriviaQuestions(token).then(
    (response) => {
      dispatch(actSetQuestions(response));
    },
  ).catch(
    (error) => console.error(error),
  );
};

export {
  SET_QUESTIONS,
  SET_TIMEOUT,
  actSetQuestions,
  actSetTimeOut,
  fetchQuestions,
};
