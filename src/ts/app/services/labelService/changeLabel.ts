import { transformLabel } from './transformLabel';

export const changeLabel = (value: string): string => {
  const labelValue = transformLabel(value);

  switch (labelValue) {
    case 'primaryPhone': return 'firstPhone';
    case 'businessDescription': return 'desc';
    case 'jobPosition': return 'job';
    case 'birthday': return 'dob';
    case 'workExperience(years)': return 'experience';
    default: return labelValue;
  }
};
