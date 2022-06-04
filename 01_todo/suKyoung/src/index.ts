// TYPE
type HTMLElements = {
  form: HTMLFormElement;
  inputSearch: HTMLInputElement;
  buttonSubmit: HTMLInputElement;
  buttonEdit: HTMLInputElement;
  buttonDeleteAll: HTMLInputElement;
  listResult: HTMLUListElement;
  messageAlert: HTMLParagraphElement;
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

function init() {
  const {form, buttonDeleteAll} = HTMLElements();

  form?.addEventListener('submit', submitForm);
  buttonDeleteAll?.addEventListener('click', deleteAll);
}

// CREATE TO-DO
function submitForm(e: any) {
  e.preventDefault();
  const {inputSearch, buttonSubmit, listResult} = HTMLElements();
  buttonSubmit.innerText = 'Submit';
  inputSearch?.addEventListener('keydown', resetToastMessage);

  const newGrocery = getInputValue();
  if (newGrocery === undefined) return;
  const newHTMLLiElement = createHTMLLiElement(newGrocery);
  if (inputSearch !== null) inputSearch.value = '';

  return listResult?.append(newHTMLLiElement);
}

function createHTMLLiElement(text: string): HTMLLIElement {
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
  newHTMLSpanElement.innerText = text;

  newHTMLLiElement.append(newHTMLSpanElement);
  newHTMLLiElement.append(newHTMLEditButtonElement);
  newHTMLLiElement.append(newHTMLDeleteButtonElement);

  return newHTMLLiElement;
}

function getInputValue(): string | undefined {
  const { inputSearch } = HTMLElements();
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

const messages: MessagesType[] = [
  {text: 'Please Enter Value', add: 'warning', remove: 'success'},
  {text: 'Item added to the list', add: 'success', remove: 'warning'},
  {text: 'All items are deleted', add: 'warning', remove: 'success'},
  {text: 'A single item is deleted', add: 'warning', remove: 'success'},
  {text: 'Value changed', add: 'success', remove: 'warning'},
];

function paintToastMessage(obj: MessagesType): HTMLParagraphElement {
  const { messageAlert } = HTMLElements();
  messageAlert.innerText = obj.text;
  messageAlert.classList.remove(obj.remove);
  messageAlert.classList.add(obj.add);

  return messageAlert;
}

function resetToastMessage() {
  const { messageAlert } = HTMLElements();

  messageAlert.innerText = '';
  messageAlert.classList.remove('success');
  messageAlert.classList.remove('warning');
}

// DELETE TO-DO
function deleteSingleToDoList(e: any) {
  const parentLiElement = e.target.parentElement;
  if (parentLiElement === undefined) console.error('Error: ', e);
  parentLiElement.remove();
  paintToastMessage(messages[3]);
}

function deleteAll() {
  const {listResult} = HTMLElements();
  [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
  paintToastMessage(messages[2]);
}

// EDIT TO-DO
function editSingleToDoList(e: any) {
  const {form, inputSearch, buttonSubmit} = HTMLElements();
  const parentLiElement = e.target.parentElement;
  const toDoValue = parentLiElement.children[0].innerText;
  inputSearch.value = toDoValue;
  buttonSubmit.innerText = 'Edit';

  function submitEditForm(e: any) {
    e.preventDefault();
    const editValue = getInputValue();
    parentLiElement.children[0].innerText = editValue;
    buttonSubmit.innerText = 'Submit';
    inputSearch.value = '';
    paintToastMessage(messages[4]);
    form.removeEventListener('submit', submitEditForm);
    form.addEventListener('submit', submitForm);
  }
  
  form.removeEventListener('submit', submitForm);
  form.addEventListener('submit', submitEditForm);
}

// inputSearch?.setAttribute("value", toDoValue); 는 작동안함
// Using setAttribute() to modify certain attributes, most notably value in XUL, works inconsistently, as the attribute specifies the default value. To access or modify the current values, you should use the properties. For example, use Element.value instead of Element.setAttribute().
// MDN: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute