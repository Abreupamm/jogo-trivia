import React from 'react';

import logo from '../../trivia.png';
import '../../App.css';

import { ButtonSettings } from '..';

const Header = () => (
  <header className="App-header">
    <img src={ logo } className="App-logo" alt="logo" />
    <ButtonSettings />
  </header>
);

export default Header;
