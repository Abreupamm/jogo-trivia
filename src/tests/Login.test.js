import React from 'react';
import { screen } from '@testing-library/react';
import Login from '../pages/Login';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';

describe('Testando o componente Login.js', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<Login />);
  });

  test('Verifica se a palavra "Login" está na tela', ()=> {
    const elementTitle = screen.getByRole('heading', {name: /login/i, level: 1})
    expect(elementTitle).toBeInTheDocument();
  });

  test('Verifica se o botão de configurações está na tela', ()=> {
    const elementButtonSettings = screen.getByTestId('btn-settings')
    expect(elementButtonSettings).toBeInTheDocument();
  });
  
  test('verifica se existe um input name, email e botão para iniciar o jogo', ()=> {
    const elementName = screen.getByTestId('input-player-name');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    const elementButton = screen.getByTestId('btn-play');
    expect(elementName).toBeInTheDocument();
    expect(elementEmail).toBeInTheDocument();
    expect(elementButton).toBeInTheDocument();
  });

  test('verifica se é o botão "play" está desabilitado ao digitar somente o email',
  ()=>{
    const elementButton = screen.getByTestId('btn-play');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(elementEmail, 'test@test');
    expect(elementButton).toBeDisabled();
  })
  test('verifica se o botão "play" está desabilitado ao digitar somente o nome',
  ()=>{
    const elementButton = screen.getByTestId('btn-play');
    const elementName = screen.getByTestId('input-player-name');
    userEvent.type(elementName, 'Maria');
    expect(elementButton).toBeDisabled();
  })

  test('verifica se é possivel fazer login', ()=>{
    const elementName = screen.getByTestId('input-player-name');
    const elementEmail = screen.getByTestId('input-gravatar-email');
    const elementButton = screen.getByTestId('btn-play');
    expect(elementButton).toBeDisabled();
    userEvent.type(elementName, 'Maria');
    expect(elementName).toHaveValue('Maria');
    expect(elementButton).toBeDisabled();
    userEvent.type(elementEmail, 'test@test.com');
    expect(elementEmail).toHaveValue('test@test.com');
    expect(elementButton).not.toBeDisabled();
    userEvent.click(elementButton);
    expect(elementName).toBeInTheDocument();
  });
});
