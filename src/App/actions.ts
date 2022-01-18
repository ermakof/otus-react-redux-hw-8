import actionType from './actionType';
import { IUserProfile } from '@src/model';

const resetApp = () => ({
  type: actionType.RESET,
});

const setLevel = (gameLevel: string) => ({
  type: actionType.SET_LEVEL,
  payload: { gameLevel },
});

const login = (userProfile: IUserProfile) => ({
  type: actionType.LOGIN,
  payload: { userProfile },
});

const logout = () => ({
  type: actionType.LOGOUT,
});

const clearGameField = () => ({
  type: actionType.CLEAR_GAME_FIELD,
});

export { resetApp, setLevel, logout, login, clearGameField };
