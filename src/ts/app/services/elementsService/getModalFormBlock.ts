import { appConfig } from '../../appConfig';

export const getModalContentBlock = (selector: HTMLElement | Document): HTMLElement => selector.querySelector(`.${appConfig.selectors.modalFormBlock}`);
