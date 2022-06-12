import { HTMLElements } from "./index.js";
import { createHTMLLiElement } from "./createElement.js";
import { paintToastMessage } from "./toastMessages.js";

// CREATE TO-DO
export function submitForm(e: any) {
  e.preventDefault();
  const {inputSearch, buttonSubmit, listResult} = HTMLElements();
  buttonSubmit.innerText = 'Submit';
  inputSearch.addEventListener('keydown', () => paintToastMessage('', 'remove'));

  const newGrocery = getInputValue();
  if (newGrocery === undefined) return;
  const li = createHTMLLiElement(newGrocery);
  if (inputSearch !== null) inputSearch.value = '';

  return listResult.append(li);
}

function getInputValue(): string | undefined {
  const { inputSearch } = HTMLElements();
  if (inputSearch?.value === '') {   
    paintToastMessage('Please Enter Value', 'warning');
    return;
  }

  paintToastMessage('Item added to the list', 'success');
  return inputSearch?.value;
}

// DELETE TO-DO
export function deleteSingleToDoList(e: any) {
  const parentLiElement = e.target.parentElement;
  if (parentLiElement === undefined) console.error('Error: ', e);
  parentLiElement.remove();
  paintToastMessage('A single item is deleted', 'warning');
}

export function deleteAll() {
  const {listResult} = HTMLElements();
  [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
  paintToastMessage('All items are deleted', 'warning');
}

// EDIT TO-DO
export function editSingleToDoList(e: any) {
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
    paintToastMessage('Value changed', 'success');
    // FIXME: 해당 핸들러에서 처리하거나 다른 방식으로 처리할 수 있는 방법이 있을지?
    form.removeEventListener('submit', submitEditForm);
    form.addEventListener('submit', submitForm);
  }
  
  form.removeEventListener('submit', submitForm);
  form.addEventListener('submit', submitEditForm);
}