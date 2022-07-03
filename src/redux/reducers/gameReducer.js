import { SET_QUESTIONS, SET_TIMEOUT } from '../actions';

const initialState = {
  response_code: 3,
  results: null,
  timeOut: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_QUESTIONS:
    return {
      ...state,
      ...action.payload,
    };
  case SET_TIMEOUT:
    return {
      ...state,
      timeOut: action.payload,
    };
  default:
    return state;
  }
};

export default gameReducer;
