import { Todo } from './model';

export class TodoManager {
  private todos: Todo[] = [];
  private idForAssign = 1;

  constructor(private updateCallback: (todoManager: TodoManager) => void) {}

  addTodo(text: string) {
    this.todos.push({
      id: this.autoIncrementId(),
      content: text,
    });

    this.render();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    this.render();
  }

  updateTodo(id: number, text: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new Error(`${id} Todo not found.`);
    todo.content = text;

    this.render();
  }

  deleteAll() {
    this.todos = [];
    this.render();
  }

  getAllTodo() {
    return this.todos;
  }

  private autoIncrementId() {
    return this.idForAssign++;
  }

  private render() {
    this.updateCallback(this);
  }
}
