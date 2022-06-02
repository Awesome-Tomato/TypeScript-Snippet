type HTMLElements = {
  form: HTMLFormElement | null;
  inputSearch: HTMLInputElement | null;
  buttonEdit: HTMLInputElement | null;
  buttonDeleteAll: HTMLInputElement | null;
  listResult: HTMLUListElement | null;
}

function HTMLElements(): HTMLElements {
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#searchInput');
  const buttonEdit = document.querySelector('.edit');
  const buttonDeleteAll = document.querySelector('#deleteAll');
  const listResult = document.querySelector('ul');

  return {
    form: form as HTMLFormElement,
    inputSearch: inputSearch as HTMLInputElement,
    buttonEdit: buttonEdit as HTMLInputElement,
    buttonDeleteAll: buttonDeleteAll as HTMLInputElement,
    listResult: listResult as HTMLUListElement,
  }
}

init();

function init() {
  const {form, buttonDeleteAll} = HTMLElements();

  form?.addEventListener('submit', submitForm);
  buttonDeleteAll?.addEventListener('click', deleteAll);
}

function submitForm(e: any) {
  e.preventDefault();
  const {inputSearch, listResult} = HTMLElements();

  const newHTMLLiElement = createHTMLLiElement();
  if (newHTMLLiElement === undefined) return;
  if (inputSearch !== null) inputSearch.value = '';

  return listResult?.append(newHTMLLiElement);
}

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

  newHTMLSpanElement.innerText = newGrocery;
  newHTMLLiElement.append(newHTMLSpanElement);
  newHTMLLiElement.append(newHTMLEditButtonElement);
  newHTMLLiElement.append(newHTMLDeleteButtonElement);

  return newHTMLLiElement;
}

function getInputValue() {
  const { inputSearch } = HTMLElements();
  if (inputSearch?.value === '') return;
  
  return inputSearch?.value;
}

function deleteSingleToDoList(e: any) {
  if (e.target.parentElement === undefined) console.error('Error: ', e);
  e.target.parentElement.remove();
}

function deleteAll() {
  const {listResult} = HTMLElements();
  if (listResult === null) return;
  [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
}