import { SET_QUESTIONS, SET_TIMEOUT, SET_NEXT } from '../actions';

const initialState = {
  response_code: 3,
  results: null,
  timeOut: false,
  indexQuestion: 0,
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
  case SET_NEXT:
    return {
      ...state,
      indexQuestion: action.payload,
    };
  default:
    return state;
  }
};

export default gameReducer;
