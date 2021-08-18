import { appConfig } from '../appConfig';
import { getInput } from '../services/elementsService/getInput';
import { getLabels } from '../services/elementsService/getLabels';

export const setDataRadio = (selector: HTMLElement, gender: string): void => {
  const labelsGender = getLabels(selector, appConfig.selectors.formControlLabel);
  labelsGender.forEach((labelItem) => {
    const inputGender = getInput(labelItem);
    if (inputGender && inputGender.value.toLowerCase() === gender) {
      inputGender.click();
    }
  });
};
