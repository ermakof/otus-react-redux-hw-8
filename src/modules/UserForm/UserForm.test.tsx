import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserForm from '@src/modules/UserForm';
import userEvent from '@testing-library/user-event';
import Store from '@src/store';
import { BrowserRouter as Router } from 'react-router-dom';

describe('UserForm', () => {
  it('Render <UserForm>', () => {
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
          <UserForm />
        </Router>
      </Store.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    const userForm = screen.getByRole(/userForm/gi);
    expect(userForm).toBeInTheDocument();
    const buttonReset = screen.getByRole(/^buttonReset$/gi);
    expect(buttonReset).toBeInTheDocument();
    const select = screen.getByRole(/^select$/gi);
    expect(select).toBeInTheDocument();
    const buttonLogout = screen.getByRole(/^buttonLogout$/gi);
    expect(buttonLogout).toBeInTheDocument();
  });

  it('Change input <UserForm>', async () => {
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
          <UserForm />
        </Router>
      </Store.Provider>
    );
    userEvent.click(screen.getByRole('buttonLogout'));

    await waitFor(() =>
      expect(dispatch).toHaveBeenCalledWith({
        type: 'APP__WAIT_ON',
      })
    );
  });
});
