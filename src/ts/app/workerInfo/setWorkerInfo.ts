import { appConfig } from '../appConfig';
import { appState } from '../appState';
import { IWorkerData } from '../models/workerData.model';
import { getBtn } from '../services/elementsService/getBtn';
import { getContainers } from '../services/elementsService/getContainers';
import { getModalContainer } from '../services/elementsService/getModalContainer';
import { getModalContentBlock } from '../services/elementsService/getModalFormBlock';
import { cancelModal } from '../shared/cancelModal';
import { closeModal } from '../shared/closeModal';
import { setDataInput } from '../shared/setDataInput';


export const setWorkerInfo = (selector: Document, data: IWorkerData): void => {
  appState.setData({ isModal: true });
  const btnAdd = getBtn(selector, appConfig.btnsText.add);
  btnAdd.click();
  const modalContainer = getModalContainer(selector);

  const checkOpenModal = setInterval(() => {
    const modalContent = getModalContentBlock(modalContainer);
    if (modalContent) {
      clearInterval(checkOpenModal);
      const containers = getContainers(modalContent);
      containers.forEach((container: HTMLElement) => {
        setDataInput(container, data);
      });
      const btnAddModal = getBtn(modalContainer, appConfig.btnsText.add);
      btnAddModal.click();
      btnAddModal.addEventListener('click', closeModal.bind(null, data), false);

      const btnCancel = getBtn(modalContainer, appConfig.btnsText.cancel);
      btnCancel.addEventListener('click', cancelModal, true);
    }
  }, appConfig.intervalCheckOpenModal);
};
