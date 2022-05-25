export function $(selector: string) {
  const element = document.querySelector(selector);
  if (!element) throw Error(`${selector} not found`);

  return element;
}

export function toInputElement(element: Element): HTMLInputElement {
  if ('value' in element) return element as HTMLInputElement;

  throw Error(`Provided element doesn't have key 'value'`);
}
