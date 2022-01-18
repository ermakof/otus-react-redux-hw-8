import React from 'react';
import { render, screen } from '@testing-library/react';
import AppHeader from '@src/App/AppHeader';
import Store from '@src/store';
import { IAction } from '@src/model';

let dispatch: (action: IAction) => void;

describe('AppHeader', () => {
  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('Render <AppHeader>', () => {
    const state = {
      gameLevel: '1',
      gameFieldSize: 3,
      gameFieldPercentFilled: 10,
      gameFieldData: [1, 0, 0, 0, 0, 0, 0, 0, 0],
      selectedCells: {},
    };
    const { asFragment } = render(
      <Store.Provider value={{ dispatch, state }}>
        <AppHeader />
      </Store.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    const title = screen.getByText(/Lines/gi);
    expect(title).toBeInTheDocument();
    const button = screen.getByRole(/button/gi);
    expect(button).toBeInTheDocument();
    const select = screen.getByRole(/select/gi);
    expect(select).toBeInTheDocument();
  });
});
