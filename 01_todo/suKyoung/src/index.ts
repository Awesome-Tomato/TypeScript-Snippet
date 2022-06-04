// TYPE
type HTMLElements = {
  form: HTMLFormElement | null;
  inputSearch: HTMLInputElement | null;
  buttonSubmit: HTMLInputElement | null;
  buttonEdit: HTMLInputElement | null;
  buttonDeleteAll: HTMLInputElement | null;
  listResult: HTMLUListElement | null;
  messageAlert: HTMLParagraphElement | null;
}

function HTMLElements(): HTMLElements {
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

function init(): void {
  const {form, buttonDeleteAll} = HTMLElements();

  form?.addEventListener('submit', submitForm);
  buttonDeleteAll?.addEventListener('click', deleteAll);
}

// CREATE TO-DO
function submitForm(e: any) {
  e.preventDefault();
  const {inputSearch, buttonSubmit, listResult} = HTMLElements();
  if (buttonSubmit === null) return;
  buttonSubmit.innerText = 'Submit';
  inputSearch?.addEventListener('keydown', resetToastMessage);

  const newHTMLLiElement = createHTMLLiElement();
  if (newHTMLLiElement === undefined) return;
  if (inputSearch !== null) inputSearch.value = '';

  return listResult?.append(newHTMLLiElement);
}

function createHTMLLiElement(): HTMLLIElement | undefined {
  const newGrocery = getInputValue();
  if (newGrocery === undefined) return;

  const newHTMLLiElement = document.createElement('li');
  const newHTMLSpanElement = document.createElement('span');
  const newHTMLEditButtonElement = document.createElement('button');
  const newHTMLDeleteButtonElement = document.createElement('button');

  newHTMLEditButtonElement.setAttribute('type', 'button');
  newHTMLDeleteButtonElement.setAttribute('type', 'button');
  newHTMLEditButtonElement.setAttribute('class', 'edit');
  newHTMLDeleteButtonElement.setAttribute('class', 'delete');
  newHTMLEditButtonElement.innerText = 'edit';
  newHTMLDeleteButtonElement.innerText = 'delete';
  newHTMLEditButtonElement.addEventListener('click', editSingleToDoList);
  newHTMLDeleteButtonElement.addEventListener('click', deleteSingleToDoList);

  newHTMLSpanElement.setAttribute('class', 'capitalize');
  newHTMLSpanElement.innerText = newGrocery;

  newHTMLLiElement.append(newHTMLSpanElement);
  newHTMLLiElement.append(newHTMLEditButtonElement);
  newHTMLLiElement.append(newHTMLDeleteButtonElement);

  return newHTMLLiElement;
}

function getInputValue(): string | undefined {
  const { inputSearch, messageAlert } = HTMLElements();
  if (messageAlert === null) return;
  if (inputSearch?.value === '') {   
    paintToastMessage(messages[0]);
    return;
  }

  paintToastMessage(messages[1]);
  return inputSearch?.value;
}

// Toast Messages
type MessagesType = {
  text: string;
  add: string;
  remove: string;
}

const messages = [
  {text: 'Please Enter Value', add: 'warning', remove: 'success'},
  {text: 'Item added to the list', add: 'success', remove: 'warning'},
  {text: 'All items are deleted', add: 'warning', remove: 'success'},
  {text: 'A single item is deleted', add: 'warning', remove: 'success'},
  {text: 'Value changed', add: '', remove: ''}, // FIXME
];

function paintToastMessage(obj: MessagesType): HTMLParagraphElement | undefined {
  const { messageAlert } = HTMLElements();
  if (messageAlert === null) return;

  messageAlert.innerText = obj.text;
  messageAlert.classList.remove(obj.remove);
  messageAlert.classList.add(obj.add);

  return messageAlert;
}

function resetToastMessage(): void {
  const { messageAlert } = HTMLElements();
  if (messageAlert === null) return;

  messageAlert.innerText = '';
  messageAlert.classList.remove('success');
  messageAlert.classList.remove('warning');
}

// DELETE TO-DO
function deleteSingleToDoList(e: any): void {
  const parentLiElement = e.target.parentElement;

  if (parentLiElement === undefined) console.error('Error: ', e);
  parentLiElement.remove();
  paintToastMessage(messages[3]);
}

function deleteAll(): void {
  const {listResult} = HTMLElements();
  if (listResult === null) return;
  [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
  paintToastMessage(messages[2]);
}

// FIXME: EDIT TO-DO
function editSingleToDoList(e: any): void {
  const {form, inputSearch, buttonSubmit} = HTMLElements();
  if (form === null) return;
  if (buttonSubmit === null) return;

  const parentLiElement = e.target.parentElement;
  const toDoValue = parentLiElement.children[0].innerText;

  inputSearch?.setAttribute("value", toDoValue); // doesn't work
  buttonSubmit.innerText = 'Edit';
}