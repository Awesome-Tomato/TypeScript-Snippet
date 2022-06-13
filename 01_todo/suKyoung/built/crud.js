import { HTMLElements, messages } from "./utils";
import { createHTMLLiElement } from "./createElement";
import { paintToastMessage, resetToastMessage } from "./toastMessages";
// CREATE TO-DO
export function submitForm(e) {
    e.preventDefault();
    const { inputSearch, buttonSubmit, listResult } = HTMLElements();
    buttonSubmit.innerText = 'Submit';
    inputSearch.addEventListener('keydown', resetToastMessage);
    const newGrocery = getInputValue();
    if (newGrocery === undefined)
        return;
    const li = createHTMLLiElement(newGrocery);
    if (inputSearch !== null)
        inputSearch.value = '';
    return listResult.append(li);
}
function getInputValue() {
    const { inputSearch } = HTMLElements();
    if (inputSearch?.value === '') {
        paintToastMessage(messages[0]);
        return;
    }
    paintToastMessage(messages[1]);
    return inputSearch?.value;
}
// DELETE TO-DO
export function deleteSingleToDoList(e) {
    // FIXME: 구조가 바뀌거나 순서가 바뀐다면? 수정에 용이하게 대처하기 위해서는?
    const parentLiElement = e.target.parentElement;
    if (parentLiElement === undefined)
        console.error('Error: ', e);
    parentLiElement.remove();
    paintToastMessage(messages[3]);
}
export function deleteAll() {
    const { listResult } = HTMLElements();
    [...listResult.children].forEach(lists => lists.remove()); // HTMLCollection
    paintToastMessage(messages[2]);
}
// EDIT TO-DO
export function editSingleToDoList(e) {
    const { form, inputSearch, buttonSubmit } = HTMLElements();
    const parentLiElement = e.target.parentElement;
    const toDoValue = parentLiElement.children[0].innerText;
    inputSearch.value = toDoValue;
    buttonSubmit.innerText = 'Edit';
    function submitEditForm(e) {
        e.preventDefault();
        const editValue = getInputValue();
        parentLiElement.children[0].innerText = editValue;
        buttonSubmit.innerText = 'Submit';
        inputSearch.value = '';
        paintToastMessage(messages[4]);
        // FIXME: 해당 핸들러에서 처리하거나 다른 방식으로 처리할 수 있는 방법이 있을지?
        form.removeEventListener('submit', submitEditForm);
        form.addEventListener('submit', submitForm);
    }
    form.removeEventListener('submit', submitForm);
    form.addEventListener('submit', submitEditForm);
}
