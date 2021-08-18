import { appConfig } from '../../appConfig';

export const getBtnCancel = (selector: HTMLElement | Document): HTMLButtonElement => {
  const btns = selector.querySelectorAll(`.${appConfig.selectors.btn}`);
  let btnCancel: HTMLButtonElement = null;
  btns.forEach((btn: HTMLButtonElement) => {
    const label = btn.querySelector(`.${appConfig.selectors.btnLabel}`);
    if (label.textContent.toLowerCase() === 'cancel') btnCancel = btn;
  });
  return btnCancel;
};
