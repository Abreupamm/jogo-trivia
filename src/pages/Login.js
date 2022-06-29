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
  const token = useSelector((state) => state.game.token);

  const dispatch = useDispatch();

  const handleLogin = (email, name) => {
    const payload = {
      name,
      gravatarEmail: email,
    };

    dispatch(actSetPlayer(payload));
    dispatch(fetchToken());
  };

  useEffect(() => {
    if (token) setRedirect(true);
  }, [token]);

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
