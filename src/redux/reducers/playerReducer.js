import { SET_PLAYER } from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PLAYER:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default playerReducer;
