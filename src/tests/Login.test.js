import React from 'react';
import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import App from '../App';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Testando o componente Login.js', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
  });

  
  test('verifica se existe um input name, email e botão para iniciar o jogo', ()=> {
    const elementName = screen.getByTestId('input-player-name');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    const elementButton = screen.getByTestId('btn-play');
    expect(elementName).toBeInTheDocument;
    expect(elementEmail).toBeInTheDocument;
    expect(elementButton).toBeInTheDocument;
  });
  test('verifica se é possivel fazer login', async ()=>{
    const elementName = screen.getByTestId('input-player-name');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    const elementButton = screen.getByTestId('btn-play');
    expect(elementButton).ToBeDisabled;
    userEvent.type(elementName, 'Maria');
    expect(elementName).toHaveValue('Maria');
    expect(elementButton).ToBeDisabled;
    userEvent.type(elementEmail, 'test@test.com');
    expect(elementEmail).toHaveValue('test@test.com');
    expect(elementButton).not.ToBeDisabled;
    userEvent.click(elementButton);
    await screen.findByText('Maria');
  });
});
