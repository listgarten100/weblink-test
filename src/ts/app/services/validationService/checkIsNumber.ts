export const checkIsNumber = (value: string, input?: HTMLInputElement): number => {
  if (!value) return null;
  const numb = value.split(' ').join('');
  if (!Number.isNaN(+numb)) {
    if (input) {
      const max = +input.getAttribute('max');
      if (max && max < Number(numb)) return max;
    }
    return Number(numb);
  }

  return null;
};
