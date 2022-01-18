import { IAction, IState } from '@src/model';
import GameFieldActions from '@src/modules/GameField/actionType';
import CellActions from '@src/modules/Cell/actionType';
import AppActions from '@src/App/actionType';
import initialState from '@src/initialState';
import createGameField from '@src/utils/createGameField';

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case GameFieldActions.SET_SIZE: {
      const { gameFieldSize = initialState.gameFieldSize } = action.payload || {};
      return {
        ...state,
        gameFieldSize: gameFieldSize,
        gameFieldData: createGameField(gameFieldSize ** 2),
      };
    }

    case CellActions.SET_SELECTED: {
      const { selected = true, cellId = 0 } = action.payload || {};
      const selectedCells = { ...state.selectedCells };
      selectedCells[cellId] = selected;
      return {
        ...state,
        selectedCells,
      };
    }

    case AppActions.RESET: {
      return {
        ...state,
        gameFieldData: createGameField(state.gameFieldSize ** 2, state.gameFieldPercentFilled),
      };
    }

    case AppActions.SET_LEVEL: {
      const { gameLevel = initialState.gameLevel } = action.payload || {};
      const gameFieldPercentFilled = parseInt(gameLevel, 10) * 10;
      return {
        ...state,
        gameLevel,
        gameFieldPercentFilled,
        gameFieldData: createGameField(state.gameFieldSize ** 2, gameFieldPercentFilled),
      };
    }
  }
};

export default reducer;
