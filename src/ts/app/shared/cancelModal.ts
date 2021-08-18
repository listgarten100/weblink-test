import { app } from '../app';
import { appState } from '../appState';

export const cancelModal = (): void => {
  setTimeout(() => {
    appState.setData({ isModal: false });
    app();
  }, 0);
};
