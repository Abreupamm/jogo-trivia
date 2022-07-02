import { SET_TOKEN, SET_QUESTIONS } from '../actions';

const initialState = {
  response_code: 3,
  response_message: '',
  token: '',
  results: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TOKEN:
    return {
      ...state,
      ...action.payload,
    };
  case SET_QUESTIONS:
    return {
      ...state,
      results: action.payload.results,
    };
  default:
    return state;
  }
};

export default gameReducer;
