import { deleteSingleToDoList, editSingleToDoList } from "./crud";
// FIXME: 반복되는 코드를 함수로 변경
export function createHTMLLiElement(text) {
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
