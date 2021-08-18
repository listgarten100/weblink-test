import { appConfig } from '../appConfig';
import { IData } from '../models/data.model';
import { IWorkerData } from '../models/workerData.model';
import { getInput } from '../services/elementsService/getInput';
import { getLabel } from '../services/elementsService/getLabel';
import { changeLabel } from '../services/labelService/changeLabel';
import { checkValue } from '../services/valueService/checkValue';
import { fillDataInput } from './fillDataInput';
import { setDataRadio } from './setDataRadio';

export const setDataInput = (selector: HTMLElement, data: IData | IWorkerData, isCheck = false): void => {
  const input = getInput(selector);
  const label = getLabel(selector, appConfig.selectors.formLabel);
  const labelText = changeLabel(label.textContent);

  if (labelText === 'gender') {
    setDataRadio(selector, data.gender as string);
    return;
  }
  let currentValue: string | number = null;
  if (!isCheck) currentValue = checkValue(labelText, data[labelText] as string, input);
  else currentValue = checkValue(labelText, input.value, input);
  fillDataInput(input, currentValue);
};
