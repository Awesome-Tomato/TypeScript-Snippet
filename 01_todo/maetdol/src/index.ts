import { Mode } from './constants.js';
import { actionByMode, changeInputToAddMode, renderer } from './htmlRender.js';
import { TodoManager } from './todoManager.js';
import { $, isEnum, toInputElement } from './utils.js';

run();

function run() {
  const todoManager = new TodoManager(renderer);

  const form = $('.todo-main__form');
  changeInputToAddMode();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputField = toInputElement($('.form__input'));
    if (!inputField.value.trim()) return;

    const mode = inputField.dataset.mode;
    if (!isEnum<Mode>(Mode, mode)) return;

    actionByMode[mode](todoManager);
  });

  const deleteAllButton = $('.todos__button--delete-all');
  deleteAllButton.addEventListener('click', () => {
    todoManager.deleteAll();
    changeInputToAddMode();
  });
}
