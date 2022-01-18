import ICellInfo from '@src/model/ICellInfo';
import { ISelectedCells } from '@src/modules/Cell/models';

export interface IState {
  gameFieldSize: number;
  gameFieldPercentFilled: number;
  gameFieldData: Array<ICellInfo>;
  gameLevel: string;
  selectedCells: ISelectedCells;
}
