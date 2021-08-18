import { appConfig } from '../../appConfig';

export const getContainers = (selector: HTMLElement | Document): NodeListOf<HTMLDivElement> => selector.querySelectorAll(`.${appConfig.selectors.inputContainer}`);
