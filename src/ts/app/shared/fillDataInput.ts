export const fillDataInput = (input: HTMLInputElement, value: string | number): void => {
  const prototype = Object.getPrototypeOf(input);
  const prototypeSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  input.focus();
  prototypeSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.blur();
};
