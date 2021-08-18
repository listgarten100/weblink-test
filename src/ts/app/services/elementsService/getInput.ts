import { appConfig } from '../../appConfig';

export const getInput = (selector: HTMLElement): HTMLInputElement => selector.querySelector(`${appConfig.selectors.input}`);
