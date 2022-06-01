type HTMLElements = {
  form: HTMLFormElement | null;
  inputSearch: HTMLInputElement | null;
  buttonEdit: HTMLInputElement | null;
  buttonDelete: HTMLCollectionOf<HTMLButtonElement> | null;
  buttonDeleteAll: HTMLInputElement | null;
  listResult: HTMLUListElement | null;
}

function HTMLElements(): HTMLElements {
  const form = document.querySelector('form');
  const inputSearch = document.querySelector('#searchInput');
  const buttonEdit = document.querySelector('.edit');
  const buttonDelete = document.getElementsByClassName('.delete');
  const buttonDeleteAll = document.querySelector('#deleteAll');
  const listResult = document.querySelector('ul');

  return {
    form: form as HTMLFormElement,
    inputSearch: inputSearch as HTMLInputElement,
    buttonEdit: buttonEdit as HTMLInputElement,
    buttonDelete: buttonDelete as HTMLCollectionOf<HTMLButtonElement>,
    buttonDeleteAll: buttonDeleteAll as HTMLInputElement,
    listResult: listResult as HTMLUListElement,
  }
}

init();

function init() {
  const {form, buttonDeleteAll, buttonDelete} = HTMLElements();

  form?.addEventListener('submit', submitForm);
  buttonDeleteAll?.addEventListener('click', deleteAll);
  // buttonDelete?.addEventListener('click', deleteSingleElement);
}

function submitForm(e: any) {
  e.preventDefault();
  const {inputSearch, listResult} = HTMLElements();
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
  newHTMLDeleteButtonElement.addEventListener('click', deleteSingleElement);

  newHTMLSpanElement.innerText = newGrocery;
  newHTMLLiElement.append(newHTMLSpanElement);
  newHTMLLiElement.append(newHTMLEditButtonElement);
  newHTMLLiElement.append(newHTMLDeleteButtonElement);
  
  if (inputSearch !== null) inputSearch.value = '';
  return listResult?.append(newHTMLLiElement);
}

function getInputValue() {
  const { inputSearch } = HTMLElements();
  return inputSearch?.value;
}
// TODO: DELETE 기능구현
function deleteSingleElement(e: any) {
  if (e.parentElement === undefined) console.log('흠')
//  e.parentElement.remove();
  console.log(e.parentElement);
}

function deleteAll() {
  const {listResult} = HTMLElements();
  if (listResult === null) return;
  [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
}