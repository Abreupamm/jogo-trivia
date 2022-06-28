import React from 'react';

import {
  Header,
  LoginForm,
} from '../components';

const Login = () => (
  <>
    <Header />
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm />
    </div>
  </>
);

export default Login;
