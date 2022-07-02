import { SET_QUESTIONS } from '../actions';

const initialState = {
  response_code: 3,
  results: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_QUESTIONS:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default gameReducer;
