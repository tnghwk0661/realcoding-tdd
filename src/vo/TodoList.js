import { makeObservable, observable } from "mobx";

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
    this._items = items;
    this._date = date;
  }


  get items() {
    return this._items;
  }

  removeTodoItem = (todoId) => {
   const targetTodoItemIndex = this._items.findIndex(
     (todo) => todo.id === todoId 
   );
   if (targetTodoItemIndex === -1) return;
   this._items.splice(targetTodoItemIndex, 1);
  };

  pushTodoItem = (todoItem) => {
    this._items.push(todoItem);
  }

  _equalsDayFilter = (todoItem) => todoItem.equalsDayOfCreatedAt(this._date);
  _notEqualsDayFilter = (todoItem) => !todoItem.equalsDayOfCreatedAt(this._date);

  _completedFilter = (todoItem) => todoItem.completed;
  _notCompletedFilter = (todoItem) => !todoItem.completed;

  

  get equalsDayItems() {
    return this._items.filter(this._equalsDayFilter);
  }
  get notEqualsDayItems() {
    return this._items.filter(this._notEqualsDayFilter);
  }

  get equalsDayAndCompletedItems() {
    return this.equalsDayItems.filter(this._completedFilter);
  }

  get notEqualsDayAndNotCompletedItems() {
    return this.equalsDayItems.filter(this._notCompletedFilter);
  }

  get notEqualsDayItems() {
    return this._items.filter(this._notEqualsDayFilter);
  } 
}

export default TodoList;
