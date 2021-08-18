import { appConfig } from '../../appConfig';

export const checkIsEmail = (value: string): string => {
  if (!value) return null;
  if (appConfig.regExpEmail.test(value)) return value;
  return null;
};
