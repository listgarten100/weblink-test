import { IWorkerData } from './workerData.model';

export interface IData {
  desc: string;
  email: string;
  firstPhone: string;
  name: string;
  secondaryPhone: string;
  workers: Array<IWorkerData>;
  [x: string]: string | Array<IWorkerData>;
}
