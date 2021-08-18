export const getLabels = (container: HTMLElement, selector: string): NodeListOf<HTMLElement> => container.querySelectorAll(`.${selector}`);
