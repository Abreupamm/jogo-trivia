import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e) => {
    const { target: { id, value } } = e;

    switch (id) {
    case 'gravatar-email':
      setEmail(value);
      break;
    case 'player-name':
      setName(value);
      break;
    default:
      break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(name, email);
  };

  useEffect(() => {
    if (email && name) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, name]);

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="gravatar-email" className="input-email">
        Email do Gravatar:
        <input
          type="email"
          id="gravatar-email"
          className="gravatar-email"
          name="gravatar-email"
          value={ email }
          onChange={ handleChange }
          data-testid="input-gravatar-email"
        />
      </label>
      <label htmlFor="player-name" className="input-name">
        Nome do Jogador:
        <input
          type="text"
          id="player-name"
          className="player-name"
          name="player-name"
          value={ name }
          onChange={ handleChange }
          data-testid="input-player-name"
        />
      </label>
      <button
        type="submit"
        id="btn-play"
        className="btn-play"
        name="btn-play"
        disabled={ buttonDisabled }
        data-testid="btn-play"
      >
        Play
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
