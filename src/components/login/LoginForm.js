import React, { useEffect, useState } from 'react';

const LoginForm = () => {
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

  useEffect(() => {
    if (email && name) setButtonDisabled(false);
  }, [email, name]);

  return (
    <form>
      <label htmlFor="gravatar-email">
        Email do Gravatar:
        <input
          type="email"
          id="gravatar-email"
          name="gravatar-email"
          value={ email }
          onChange={ handleChange }
          data-testid="input-gravatar-email"
        />
      </label>
      <label htmlFor="player-name">
        Nome do Jogador:
        <input
          type="text"
          id="player-name"
          name="player-name"
          value={ name }
          onChange={ handleChange }
          data-testid="input-player-name"
        />
      </label>
      <button
        type="submit"
        id="btn-play"
        name="btn-play"
        disabled={ buttonDisabled }
        data-testid="btn-play"
      >
        Play
      </button>
    </form>
  );
};

export default LoginForm;
