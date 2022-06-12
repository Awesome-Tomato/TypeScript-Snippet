import { deleteAll, submitForm } from "./crud.js";

type HTMLElements = {
  form: HTMLFormElement;
  inputSearch: HTMLInputElement;
  buttonSubmit: HTMLInputElement;
  buttonEdit: HTMLInputElement;
  buttonDeleteAll: HTMLInputElement;
  listResult: HTMLUListElement;
  messageAlert: HTMLParagraphElement;
}

// FIXME: 예외처리 필요
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

init();

function init() {
  const {form, buttonDeleteAll} = HTMLElements();

  form.addEventListener('submit', submitForm);
  buttonDeleteAll.addEventListener('click', deleteAll);
}