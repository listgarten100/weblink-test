import { appConfig } from '../../appConfig';

export const getModalContainer = (selector: HTMLElement | Document): HTMLElement => selector.querySelector(`.${appConfig.selectors.modalContainer}`);
