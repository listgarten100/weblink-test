import { app } from '../app';
import { appConfig } from '../appConfig';
import { appState } from '../appState';
import { IWorkerData } from '../models/workerData.model';
import { getBtn } from '../services/elementsService/getBtn';
import { getContainers } from '../services/elementsService/getContainers';
import { getElementsError } from '../services/elementsService/getElementsError';
import { getModalContainer } from '../services/elementsService/getModalContainer';
import { setDataInput } from './setDataInput';

export const closeModal = (data: IWorkerData): void => {
  const modalContainer = getModalContainer(document);
  const containers = getContainers(modalContainer);
  containers.forEach((container: HTMLElement) => setDataInput(container, data, true));
  appState.setData({ isModal: false });
  const hasErrors = getElementsError(modalContainer);
  if (!hasErrors.length) {
    const btnAddModal = getBtn(modalContainer, appConfig.btnsText.add);
    btnAddModal.removeEventListener('click', closeModal.bind(null, data));
    const closedModalTimer = setInterval(() => {
      if (!getModalContainer(document)) {
        clearInterval(closedModalTimer);
        app();
      }
    }, appConfig.intervalCheckCloseModal);
  }
};
