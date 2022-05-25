import { Mode } from './constants.js';
import { Todo } from './model.js';
import { TodoManager } from './todoManager.js';
import { $, toInputElement } from './utils.js';

run();

function run() {
  const todoManager = new TodoManager(renderer);

  const form = $('.todo-main__form');
  const inputField = toInputElement($('.form__input'));
  let mode: Mode = Mode.Add;
  let selectedTodoId: number = -1;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    switch (mode) {
      case Mode.Add:
        return void todoManager.addTodo(inputField.value);
      case Mode.Edit:
        todoManager.updateTodo(selectedTodoId, inputField.value);
        mode = Mode.Add;
        selectedTodoId = 0;
        return;
    }
  });

  const deleteAllButton = $('.todos__button--delete-all');
  deleteAllButton.addEventListener('click', () => todoManager.deleteAll());
}

function renderer(todos: Todo[]) {
  const list = $('.todo-main__todos');
  list.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = newTodoItem(todo);
    list.append(todoItem);
  });
}

function newTodoItem(todo: Todo) {
  const li = document.createElement('li');
  li.innerText = todo.content;
  li.classList.add('todos__item');

  return li;
}
