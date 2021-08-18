import { checkIsEmail } from '../validationService/checkIsEmail';
import { checkIsNumber } from '../validationService/checkIsNumber';
import { sliceValue } from '../validationService/sliceValue';
import { validDate } from '../validationService/validDate';


export const checkValue = (label: string, value: string, input: HTMLInputElement): string | number => {
  switch (label) {
    case 'firstPhone':
    case 'secondaryPhone':
      return checkIsNumber(value);
    case 'experience':
      return checkIsNumber(value, input);
    case 'email':
      return checkIsEmail(value);
    case 'dob':
      return validDate(value);
    case 'desc':
      return sliceValue(value, Number(input.getAttribute('maxLength')));
    default:
      return value;
  }
};
