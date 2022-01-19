import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AuthForm from '@src/modules/Auth/AuthForm';
import userEvent from '@testing-library/user-event';
import Store from '@src/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AuthForm', () => {
  it('Render <AuthForm>', () => {
    const state = {
      gameLevel: '1',
      gameFieldSize: 3,
      gameFieldPercentFilled: 10,
      gameFieldData: [1, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    const dispatch = jest.fn();
    const { asFragment } = render(
      <Store.Provider value={{ dispatch, state }}>
        <Router>
          <AuthForm />
        </Router>
      </Store.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    const authForm = screen.getByRole(/authForm/gi);
    expect(authForm).toBeInTheDocument();
    const login = screen.getByRole(/^login$/gi);
    expect(login).toBeInTheDocument();
    const password = screen.getByRole(/password/gi);
    expect(password).toBeInTheDocument();
  });

  it('Change input <AuthForm>', async () => {
    const state = {
      gameLevel: '1',
      gameFieldSize: 3,
      gameFieldPercentFilled: 10,
      gameFieldData: [1, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    const dispatch = jest.fn();
    render(
      <Store.Provider value={{ dispatch, state }}>
        <Router>
          <AuthForm />
        </Router>
      </Store.Provider>
    );
    const login = screen.getByRole(/^login$/gi);
    userEvent.clear(login);
    userEvent.type(login, 'Иван');
    const password = screen.getByRole(/password/gi);
    userEvent.clear(password);
    userEvent.type(password, '123');

    userEvent.click(screen.getByRole('buttonLogin'));

    await waitFor(() =>
      expect(dispatch).toHaveBeenCalledWith({
        type: 'APP__WAIT_ON',
      })
    );
  });
});
