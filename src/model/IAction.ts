import IPayload from './IPayload';

export interface IAction {
  type: string;
  payload?: IPayload;
}
