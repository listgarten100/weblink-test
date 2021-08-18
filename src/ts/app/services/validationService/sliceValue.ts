export const sliceValue = (value: string, maxLength: number): string => {
  if (!value) return null;
  return value.slice(0, maxLength);
};
