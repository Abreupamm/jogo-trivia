import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSettings = () => (
  <Link to="/settings">
    <button
      type="button"
      id="btn-settings"
      data-testid="btn-settings"
    >
      Configurações
    </button>
  </Link>
);

export default ButtonSettings;
