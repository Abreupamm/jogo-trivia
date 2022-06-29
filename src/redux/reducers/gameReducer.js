import { SET_TOKEN } from '../actions';

const initialState = {
  response_code: 3,
  response_message: '',
  token: '',
  results: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_TOKEN:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default gameReducer;
