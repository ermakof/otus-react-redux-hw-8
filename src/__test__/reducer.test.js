import { resetApp, setLevel } from '@src/App/actions';
import { setSelectedCell } from '@src/modules/Cell/actions';
import { setGameFieldSize } from '@src/modules/GameField/actions';
import reducer from '@src/reducer';

describe('reducer', () => {
  it('resetApp', () => {
    const state = {
      gameLevel: '3',
      gameFieldSize: 5,
      gameFieldPercentFilled: 30,
      gameFieldData: [0, 1, 0, 0, 0, 0, 0, 0, 0],
      selectedCell: 1,
    };
    const newState = reducer(state, resetApp());
    expect(newState.gameFieldPercentFilled).toBe(30);
    expect(newState.gameFieldSize).toBe(5);
    expect(newState.gameLevel).toBe('3');
    expect(newState.selectedCell).toEqual(1);
    expect(newState.gameFieldData.length).toBe(25);
  });

  it('setLevel', () => {
    const state = {
      gameLevel: '3',
      gameFieldSize: 5,
      gameFieldPercentFilled: 30,
      gameFieldData: [1, 0, 0, 0, 0, 0, 0, 0, 0],
      selectedCell: 1,
    };
    const newState = reducer(state, setLevel('2'));
    expect(newState.gameFieldPercentFilled).toBe(20);
    expect(newState.gameFieldSize).toBe(5);
    expect(newState.gameLevel).toBe('2');
    expect(newState.selectedCell).toEqual(1);
    expect(newState.gameFieldData.length).toBe(25);
  });

  it('setSelectedCell', () => {
    const state = {
      gameLevel: '3',
      gameFieldSize: 5,
      gameFieldPercentFilled: 30,
      gameFieldData: [1, 0, 0, 0, 0, 0, 0, 0, 0],
      selectedCell: 1,
    };
    const newState = reducer(state, setSelectedCell(2));
    expect(newState.selectedCell).toEqual(2);
  });

  it('setGameFieldSize', () => {
    const state = {
      gameLevel: '3',
      gameFieldSize: 2,
      gameFieldPercentFilled: 30,
      gameFieldData: [1, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    const newState = reducer(state, setGameFieldSize(2));
    expect(newState.gameFieldSize).toEqual(2);
    expect(newState.gameFieldData.length).toEqual(4);
  });
});
