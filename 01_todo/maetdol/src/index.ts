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
import { changeInputToAddMode, renderer, setInputMode } from './htmlRender.js';

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
        if (!todoId) return;

        todoManager.updateTodo(parseInt(todoId), inputField.value);
        changeInputToAddMode();
        break;
    }
    inputField.value = '';
  });

  const deleteAllButton = $('.todos__button--delete-all');
  deleteAllButton.addEventListener('click', () => todoManager.deleteAll());
}
