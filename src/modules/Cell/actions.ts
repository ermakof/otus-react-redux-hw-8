import actionType from './actionType';

const setSelectedCell = (cellId: number, selected: boolean) => ({
  type: actionType.SET_SELECTED,
  payload: { cellId, selected },
});

export { setSelectedCell };
