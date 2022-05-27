export function $(selector: string) {
  const element = document.querySelector(selector);
  if (!element) throw Error(`${selector} not found`);

  return element;
}

export function toInputElement(element: Element): HTMLInputElement {
  if (element instanceof HTMLInputElement) return element as HTMLInputElement;

  throw Error(`Provided element is not an input element`);
}

export function toTemplateElement(element: Element): HTMLTemplateElement {
  if (element instanceof HTMLTemplateElement)
    return element as HTMLTemplateElement;

  throw Error(`Provided element is not an template element`);
}

export function getHTMLElementIn(
  element: Element | DocumentFragment,
  selector: string
): HTMLElement {
  const childElement = element.querySelector(selector);
  if (!childElement) throw Error(`${selector} element not found`);
  return to<HTMLElement>(HTMLElement, childElement);
}

export function toHTMLElement(node: Node): HTMLElement {
  return to<HTMLElement>(HTMLElement, node);
}

export function to<T>(cls: any, object: Object): T {
  if (object instanceof <any>cls) return <T>object;

  throw new Error(`Object is not a type of ${cls}`);
}
