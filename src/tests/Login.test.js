import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';

import App from '../App'

describe('Testando o componente Login.js', () => {
  test('Verifica a Rota', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    expect(history.location.pathname).toBe('/');
  });

  test('Verifica se a palavra "Login" está na tela', ()=> {
    renderWithRouterAndRedux(<App />);

    const elementTitle = screen.getByRole('heading', {name: /login/i, level: 1})
    
    expect(elementTitle).toBeInTheDocument();
  });

  test('Verifica se existe um input Name e Email', ()=> {
    renderWithRouterAndRedux(<App />);

    const elementName = screen.getByTestId('input-player-name');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    
    expect(elementName).toBeInTheDocument();
    expect(elementEmail).toBeInTheDocument();
  });

  test('Verificar se há o botão Play', () => {
    renderWithRouterAndRedux(<App />);

    const elementButton = screen.getByTestId('btn-play');

    expect(elementButton).toBeInTheDocument();
  });

  test('Verifica se o botão de configurações está na tela', ()=> {
    renderWithRouterAndRedux(<App />);

    const elementButtonSettings = screen.getByTestId('btn-settings')
    
    expect(elementButtonSettings).toBeInTheDocument();
  });

  test('Verifica se é o botão "play" está desabilitado ao digitar somente o email',
  ()=>{
    renderWithRouterAndRedux(<App />);

    const elementButton = screen.getByTestId('btn-play');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    
    userEvent.type(elementEmail, 'test@test');
    
    expect(elementButton).toBeDisabled();
  });

  test('Verifica se o botão "play" está desabilitado ao digitar somente o nome',
  ()=>{
    renderWithRouterAndRedux(<App />);

    const elementButton = screen.getByTestId('btn-play');
    const elementName = screen.getByTestId('input-player-name');
    
    userEvent.type(elementName, 'Maria');
    
    expect(elementButton).toBeDisabled();
  })

  test('Verifica se é possivel fazer login', async () =>{
    const { history } = renderWithRouterAndRedux(<App />);

    const playerName = 'Maria'
    const playerEmail = 'test@test.com'

    const elementName = screen.getByTestId('input-player-name');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    const elementButton = screen.getByTestId('btn-play');
    
    expect(elementButton).toBeDisabled();
    
    userEvent.type(elementName, playerName);
    expect(elementName).toHaveValue(playerName);
    expect(elementButton).toBeDisabled();
    
    userEvent.type(elementEmail, playerEmail);
    expect(elementEmail).toHaveValue(playerEmail);
    expect(elementButton).not.toBeDisabled();
    
    userEvent.click(elementButton);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/game');
    }, {timeout: 5000});
  });
});
