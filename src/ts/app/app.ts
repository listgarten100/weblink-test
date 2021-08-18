import { appState } from './appState';
import { setGeneralInfo } from './generalInfo/setGeneralInfo';
import { IData } from './models/data.model';
import { setWorkerInfo } from './workerInfo/setWorkerInfo';


export const app = (): void => {
  const initialData: IData = data;
  appState.setData({ numberWorkers: initialData.workers.length });
  const state = appState.getData();
  if (!state.isFillGeneralInfo) {
    setGeneralInfo(document, initialData);
    return;
  }

  if (state.numberWorkers > state.currentWorker) {
    setWorkerInfo(document, initialData.workers[state.currentWorker]);
    appState.setData({ currentWorker: state.currentWorker += 1 });
  }
};
