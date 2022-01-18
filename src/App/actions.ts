import actionType from './actionType';

const resetApp = () => ({
  type: actionType.RESET,
});

const setLevel = (gameLevel: string) => ({
  type: actionType.SET_LEVEL,
  payload: { gameLevel },
});

export { resetApp, setLevel };
