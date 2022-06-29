import { fetchTriviaToken } from '../../services/triviaAPI';

const SET_TOKEN = 'SET_TOKEN';

const actSetToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

const fetchToken = () => async (dispatch) => {
  fetchTriviaToken().then(
    (response) => {
      localStorage.setItem('token', response.token);
      dispatch(actSetToken(response));
    },
  ).catch(
    (error) => console.error(error),
  );
};

export {
  SET_TOKEN,
  actSetToken,
  fetchToken,
};
