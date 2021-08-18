import { appConfig } from '../../appConfig';

export const getBtn = (selector: HTMLElement | Document, typeBtn: string): HTMLButtonElement => {
  const btns = selector.querySelectorAll(`.${appConfig.selectors.btn}`);
  let btnAdd: HTMLButtonElement = null;
  btns.forEach((btn: HTMLButtonElement) => {
    const label = btn.querySelector(`.${appConfig.selectors.btnLabel}`);
    if (label.textContent.toLowerCase() === typeBtn) btnAdd = btn;
  });
  return btnAdd;
};
