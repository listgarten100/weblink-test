import { app } from './app/app';


window.addEventListener('load', () => {
  const btnFill = document.querySelector('.MuiFab-root');
  const listener = () => {
    app();
    btnFill.removeEventListener('click', listener);
  };
  btnFill.addEventListener('click', listener);
});
