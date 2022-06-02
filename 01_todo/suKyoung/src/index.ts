type HTMLElements = {
  form: HTMLFormElement | null;
  inputSearch: HTMLInputElement | null;
  buttonEdit: HTMLInputElement | null;
  buttonDeleteAll: HTMLInputElement | null;
  listResult: HTMLUListElement | null;
  messageAlert: HTMLParagraphElement | null;
}

function HTMLElements(): HTMLElements {
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#searchInput');
  const buttonEdit = document.querySelector('.edit');
  const buttonDeleteAll = document.querySelector('#deleteAll');
  const listResult = document.querySelector('ul');
  const messageAlert = document.querySelector('.message_alert');

  return {
    form: form as HTMLFormElement,
    inputSearch: inputSearch as HTMLInputElement,
    buttonEdit: buttonEdit as HTMLInputElement,
    buttonDeleteAll: buttonDeleteAll as HTMLInputElement,
    listResult: listResult as HTMLUListElement,
    messageAlert: messageAlert as HTMLParagraphElement,
  }
}

const STRING = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DEFAULT: 'default',
  EMPTY: 'Please Enter Value',
  ADDED: 'Item added to the list',
  DELETE: 'all items are deleted',
  DELETE_SINGLE: 'a single item is deleted',
};

init();

function init() {
  const {form, buttonDeleteAll} = HTMLElements();

  form?.addEventListener('submit', submitForm);
  buttonDeleteAll?.addEventListener('click', deleteAll);
}

function submitForm(e: any) {
  e.preventDefault();
  const {inputSearch, listResult} = HTMLElements();
  inputSearch?.addEventListener('keydown', resetMessageAlert);

  const newHTMLLiElement = createHTMLLiElement();
  if (newHTMLLiElement === undefined) return;
  if (inputSearch !== null) inputSearch.value = '';

  return listResult?.append(newHTMLLiElement);
}

// CREATE TO-DO LIST
function createHTMLLiElement() {
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
  newHTMLDeleteButtonElement.addEventListener('click', deleteSingleToDoList);

  newHTMLSpanElement.setAttribute('class', 'capitalize');
  newHTMLSpanElement.innerText = newGrocery;

  newHTMLLiElement.append(newHTMLSpanElement);
  newHTMLLiElement.append(newHTMLEditButtonElement);
  newHTMLLiElement.append(newHTMLDeleteButtonElement);

  return newHTMLLiElement;
}

// INPUT VALUE

function getInputValue() {
  const { inputSearch, messageAlert } = HTMLElements();
  if (messageAlert === null) return;
  if (inputSearch?.value === '') {   
    paintMessageAlert(
      STRING.EMPTY, 
      STRING.WARNING,
      STRING.SUCCESS, 
    );
    return;
  }

  paintMessageAlert(
    STRING.ADDED, 
    STRING.SUCCESS,
    STRING.WARNING, 
  );
  return inputSearch?.value;
}

// MESSAGE ALERT
function resetMessageAlert() {
  const { messageAlert } = HTMLElements();
  if (messageAlert === null) return;

  messageAlert.innerText = '';
  messageAlert.classList.remove(STRING.SUCCESS);
  messageAlert.classList.remove(STRING.WARNING);
}

function paintMessageAlert(
    string: string, 
    className1: string, 
    className2: string,
  ) {
  const { messageAlert } = HTMLElements();
  if (messageAlert === null) return;

  messageAlert.innerText = string;
  messageAlert.classList.remove(className2);
  messageAlert.classList.add(className1);

  return messageAlert;
}

// DELETE ITEMS
function deleteSingleToDoList(e: any) {
  const parentLiElement = e.target.parentElement;

  if (parentLiElement === undefined) console.error('Error: ', e);
  parentLiElement.remove();
  paintMessageAlert(
    STRING.DELETE_SINGLE, 
    STRING.WARNING, 
    STRING.SUCCESS,
  );
}

function deleteAll() {
  const {listResult} = HTMLElements();
  if (listResult === null) return;
  [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
  paintMessageAlert(
    STRING.DELETE, 
    STRING.WARNING, 
    STRING.SUCCESS,
  );
}