export type HTMLElements = {
  form: HTMLFormElement;
  inputSearch: HTMLInputElement;
  buttonSubmit: HTMLInputElement;
  buttonEdit: HTMLInputElement;
  buttonDeleteAll: HTMLInputElement;
  listResult: HTMLUListElement;
  messageAlert: HTMLParagraphElement;
}

// FIXME: 혹시모를 예외처리 필요
export function HTMLElements(): HTMLElements {
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#searchInput');
  const buttonSubmit = document.querySelector('#submit');
  const buttonEdit = document.querySelector('.edit');
  const buttonDeleteAll = document.querySelector('#deleteAll');
  const listResult = document.querySelector('ul');
  const messageAlert = document.querySelector('.message_alert');

  return {
    form: form as HTMLFormElement,
    inputSearch: inputSearch as HTMLInputElement,
    buttonSubmit: buttonSubmit as HTMLInputElement,
    buttonEdit: buttonEdit as HTMLInputElement,
    buttonDeleteAll: buttonDeleteAll as HTMLInputElement,
    listResult: listResult as HTMLUListElement,
    messageAlert: messageAlert as HTMLParagraphElement,
  }
}

export type MessagesType = {
  text: string;
  add: string;
  remove: string;
}

// FIXME: enum을 사용하도록 변경
export const messages: MessagesType[] = [
  {text: 'Please Enter Value', add: 'warning', remove: 'success'},
  {text: 'Item added to the list', add: 'success', remove: 'warning'},
  {text: 'All items are deleted', add: 'warning', remove: 'success'},
  {text: 'A single item is deleted', add: 'warning', remove: 'success'},
  {text: 'Value changed', add: 'success', remove: 'warning'},
];