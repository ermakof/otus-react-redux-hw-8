import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AuthForm from '@src/modules/AuthForm';
import userEvent from '@testing-library/user-event';

describe('AuthForm', () => {
  it('Render <AuthForm>', () => {
    const handleSubmit = jest.fn();
    const { asFragment } = render(<AuthForm onSubmit={handleSubmit} />);
    expect(asFragment()).toMatchSnapshot();
    const authForm = screen.getByRole(/authForm/gi);
    expect(authForm).toBeInTheDocument();
    const login = screen.getByRole(/^login$/gi);
    expect(login).toBeInTheDocument();
    const password = screen.getByRole(/password/gi);
    expect(password).toBeInTheDocument();
  });

  it('Change input <AuthForm>', async () => {
    const handleSubmit = jest.fn();
    render(<AuthForm onSubmit={handleSubmit} />);
    const login = screen.getByRole(/^login$/gi);
    userEvent.clear(login);
    userEvent.type(login, 'Иван');
    const password = screen.getByRole(/password/gi);
    userEvent.clear(password);
    userEvent.type(password, '123');

    userEvent.click(screen.getByRole('buttonLogin'));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        login: 'Иван',
        password: '123',
      })
    );
  });
});
