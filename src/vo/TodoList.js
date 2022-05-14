import { makeObservable, observable, action, computed } from "mobx";

class TodoList {
  /*
    items: TodoItem[] (할 일 리스트)
    date: Date (오늘 날짜)
  */
  _items = [];
  _date = "";

  constructor(items, date) {
    makeObservable(this, {
      _items: observable,
    });
    this._items = items || [];
    this._date = date;
  }

  _completedFilter = (todoItem) => todoItem.completed;
  _notCompletedFilter = (todoItem) => !todoItem.completed;

  _equalsDayFilter = (todoItem) => todoItem.equalsDayOfCreatedAt(this._date);
  _notEqualsDayFilter = (todoItem) =>
    !todoItem.equalsDayOfCreatedAt(this._date);

  get equalsDayItems() {
    return this._items.filter(this._equalsDayFilter);
  }

  get equalsDayAndCompletedItems() {
    return this.equalsDayItems.filter(this._completedFilter);
  }

  get equalsDayAndNotCompletedItems() {
    return this.equalsDayItems.filter(this._notCompletedFilter);
  }

  get notEqualsDayItems() {
    return this._items.filter(this._notEqualsDayFilter);
  }

  get notEqualsDayAndCompletedItems() {
    return this.notEqualsDayItems.filter(this._completedFilter);
  }

  get notEqualsDayAndNotCompletedItems() {
    return this.notEqualsDayItems.filter(this._notCompletedFilter);
  }

  get items() {
    return this._items;
  }

  pushTodoItem = (todoItem) => {
    this._items.push(todoItem);
  };

  removeTodoItem = (todoId) => {
    const targetTodoItemIndex = this._items.findIndex(
      (todo) => todo.id === todoId
    );
    if (targetTodoItemIndex === -1) return;
    this._items.splice(targetTodoItemIndex, 1);
  };
}

export default TodoList;