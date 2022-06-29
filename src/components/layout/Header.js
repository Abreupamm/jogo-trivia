import React from 'react';

import logo from '../../trivia.png';
import '../../App.css';

import ButtonSettings from '../settings/ButtonSettings';

const Header = () => (
  <header className="App-header">
    <img src={ logo } className="App-logo" alt="logo" />
    <ButtonSettings />
  </header>
);

export default Header;
