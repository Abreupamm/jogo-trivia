import { fetchTriviaQuestions } from '../../services/triviaAPI';

const SET_QUESTIONS = 'SET_QUESTIONS';

const actSetQuestions = (payload) => ({
  type: SET_QUESTIONS,
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
  actSetQuestions,
  fetchQuestions,
};
