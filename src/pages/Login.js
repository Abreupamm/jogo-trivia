import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  Header,
  LoginForm,
} from '../components';

import { actSetPlayer, fetchToken } from '../redux/actions';

const Login = () => {
  const [redirect, setRedirect] = useState(false);

  const responseCode = useSelector((state) => state.game.response_code);
  const token = useSelector((state) => state.game.token);

  const dispatch = useDispatch();

  const setLogin = (email, name) => {
    const payload = {
      name,
      gravatarEmail: email,
    };

    dispatch(actSetPlayer(payload));
    dispatch(fetchToken());
  };

  useEffect(() => {
    if (responseCode === 0) {
      localStorage.setItem('token', token);
      setRedirect(true);
    } else {
      localStorage.removeItem('token');
      setRedirect(false);
    }
  }, [responseCode, token]);

  return (
    <>
      { redirect && <Redirect to="/game" /> }
      <Header />
      <div className="login-page">
        <h1>Login</h1>
        <LoginForm handleLogin={ setLogin } />
      </div>
    </>
  );
};

export default Login;
