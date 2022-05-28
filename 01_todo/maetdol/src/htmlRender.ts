import { Mode } from './constants.js';
import { Todo } from './model.js';
import { TodoManager } from './todoManager.js';
import {
  $,
  getHTMLElementIn,
  to,
  toHTMLElement,
  toInputElement,
  toTemplateElement,
} from './utils.js';

export function changeInputToAddMode() {
  setInputMode(Mode.Add);
  setInputTargetTodoId(0);
  toHTMLElement($('.form__button--submit')).innerText = 'Submit';
  toInputElement($('.form__input')).value = '';
}

function changeInputToEditMode(todo: Todo) {
  setInputMode(Mode.Edit);
  setInputTargetTodoId(todo.id);
  toHTMLElement($('.form__button--submit')).innerText = 'Edit';
  const input = toInputElement($('.form__input'));
  input.value = todo.content;
  input.focus();
}

function setInputTargetTodoId(id: number) {
  const inputField = toInputElement($('.form__input'));
  inputField.dataset.todoId = id.toString();
}

export function setInputMode(mode: Mode) {
  const inputField = toInputElement($('.form__input'));
  inputField.dataset.mode = mode;
}

export function renderer(todoManager: TodoManager) {
  const todos = todoManager.getAllTodo();
  const list = $('.todo-main__todos');
  list.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = newTodoItem(
      todo,
      () => {
        todoManager.deleteTodo(todo.id);
        changeInputToAddMode();
      },
      () => {
        changeInputToEditMode(todo);
      }
    );
    list.append(todoItem);
  });
}

function newTodoItem(
  todo: Todo,
  deleteHandler: (event: Event) => void,
  editHandler: (event: Event) => void
) {
  const todoElementTemplate = toTemplateElement(
    $('#todo__item')
  ).content.cloneNode(true);
  const fragment = to<DocumentFragment>(DocumentFragment, todoElementTemplate);
  const li = getHTMLElementIn(fragment, '.todos__item');

  getHTMLElementIn(li, '.todo__content').innerText = todo.content;

  const deleteButton = getHTMLElementIn(li, '.todo__button--delete');
  deleteButton.addEventListener('click', deleteHandler);

  const editButton = getHTMLElementIn(li, '.todo__button--edit');
  editButton.addEventListener('click', editHandler);

  return li;
}

export const actionByMode = {
  [Mode.Add]: (todoManager: TodoManager) => {
    const input = toInputElement($('.form__input'));
    todoManager.addTodo(input.value);
    input.value = '';
  },

  [Mode.Edit]: (todoManager: TodoManager) => {
    const input = toInputElement($('.form__input'));
    const id = input.dataset.todoId;
    if (!id) return;

    todoManager.updateTodo(parseInt(id), input.value);
    input.value = '';
  },
};
