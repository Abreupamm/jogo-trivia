const SET_GRAVATAR_EMAIL = 'SET_EMAIL';

const actSetGravatarEmail = (payload) => ({
  type: SET_GRAVATAR_EMAIL,
  payload,
});

export {
  SET_GRAVATAR_EMAIL,
  actSetGravatarEmail,
};
