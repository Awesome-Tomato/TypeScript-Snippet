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

run();

function run() {
  const todoManager = new TodoManager(renderer);

  const form = $('.todo-main__form');
  setInputMode(Mode.Add);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputField = toInputElement($('.form__input'));
    if (!inputField.value.trim()) return;

    const mode = inputField.dataset.mode;

    switch (mode) {
      case Mode.Add:
        todoManager.addTodo(inputField.value);
        break;

      case Mode.Edit:
        const todoId = inputField.dataset.todoId;
        setInputMode(Mode.Add);
        setInputTargetTodoId(-1);
        toHTMLElement($('.form__button--submit')).innerText = 'Submit';
        if (!todoId) break;

        todoManager.updateTodo(parseInt(todoId), inputField.value);
        break;
    }
    inputField.value = '';
  });

  const deleteAllButton = $('.todos__button--delete-all');
  deleteAllButton.addEventListener('click', () => todoManager.deleteAll());
}

function setInputTargetTodoId(id: number) {
  const inputField = toInputElement($('.form__input'));
  inputField.dataset.todoId = id.toString();
}

function setInputMode(mode: Mode) {
  const inputField = toInputElement($('.form__input'));
  inputField.dataset.mode = mode;
}

function renderer(todoManager: TodoManager) {
  const todos = todoManager.getAllTodo();
  const list = $('.todo-main__todos');
  list.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = newTodoItem(
      todo,
      () => {
        todoManager.deleteTodo(todo.id);
        setInputMode(Mode.Add);
        toInputElement($('.form__input')).value = '';
        toHTMLElement($('.form__button--submit')).innerText = 'Submit';
      },
      () => {
        setInputMode(Mode.Edit);
        setInputTargetTodoId(todo.id);
        const input = toInputElement($('.form__input'));
        input.value = todo.content;
        toHTMLElement($('.form__button--submit')).innerText = 'Edit';
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
