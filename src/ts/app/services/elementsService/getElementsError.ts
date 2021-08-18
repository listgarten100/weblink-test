import { appConfig } from '../../appConfig';

export const getElementsError = (selector: HTMLElement | Document): NodeListOf<HTMLDivElement> => selector.querySelectorAll(`.${appConfig.selectors.error}`);
