import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchTriviaToken } from '../services/triviaAPI';
import { actSetPlayer } from '../redux/actions';

import {
  Header,
  LoginForm,
} from '../components';
import { setToken } from '../utils/handleToken';

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (name, email) => {
    const payload = {
      name,
      gravatarEmail: email,
    };

    fetchTriviaToken().then(
      (response) => {
        const successfulLogin = 0;
        if (response.response_code === successfulLogin) {
          dispatch(actSetPlayer(payload));
          setToken(response.token);
          setRedirect(true);
        }
      },
    );
  };

  return (
    <>
      { redirect && <Redirect to="/game" /> }
      <Header />
      <div className="login-page">
        <h1>Login</h1>
        <LoginForm handleLogin={ handleLogin } />
      </div>
    </>
  );
};

export default Login;
