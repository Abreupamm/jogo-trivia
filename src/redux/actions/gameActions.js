import { fetchTriviaToken, fetchTriviaQuestions } from '../../services/triviaAPI';

const SET_TOKEN = 'SET_TOKEN';
const SET_QUESTIONS = 'SET_QUESTIONS';

const actSetToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

const actSetQuestion = (payload) => ({
  type: SET_QUESTIONS,
  payload,
});

const fetchToken = () => async (dispatch) => {
  fetchTriviaToken().then(
    (response) => {
      dispatch(actSetToken(response));
    },
  ).catch(
    (error) => console.error(error),
  );
};

const fetchQuestions = (amount, token) => async (dispatch) => {
  fetchTriviaQuestions(amount, token).then(
    (response) => {
      dispatch(actSetQuestion(response));
    },
  ).catch(
    (error) => console.error(error),
  );
};

export {
  SET_TOKEN,
  SET_QUESTIONS,
  actSetToken,
  fetchToken,
  fetchQuestions,
};
