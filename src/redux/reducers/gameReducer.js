import { SET_QUESTIONS, SET_TIMEOUT, SET_NEXT, SET_CLICK_RESPONSE } from '../actions';

const initialState = {
  response_code: 3,
  results: null,
  timeOut: false,
  clickResponse: false,
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
      response_code: action.payload,
    };
  case SET_CLICK_RESPONSE:
    return {
      ...state,
      clickResponse: action.payload,
    };
  default:
    return state;
  }
};

export default gameReducer;
