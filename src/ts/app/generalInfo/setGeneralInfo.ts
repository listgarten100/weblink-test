import { app } from '../app';
import { appState } from '../appState';
import { IData } from '../models/data.model';
import { getContainers } from '../services/elementsService/getContainers';
import { setDataInput } from '../shared/setDataInput';

export const setGeneralInfo = (selector: Document, data: IData): void => {
  const containers = getContainers(selector);
  containers.forEach((container: HTMLElement) => setDataInput(container, data));
  appState.setData({ isFillGeneralInfo: true });
  app();
};
