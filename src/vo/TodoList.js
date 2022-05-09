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

  
	_notequalsDayFilter = (todoItem) => !todoItem.equalsDayOfCreatedAt(this._date);

  get notEqualsDayItems() {
    return this._items.filter(this._notequalsDayFilter);

  }

	_equalsDayFilter = (todoItem) => todoItem.equalsDayOfCreatedAt(this._date);

  get equalsDayItems() {
    return this._items.filter(this._equalsDayFilter);
  }



  pushTodoItem = (todoItem) => {
    this._items.push(todoItem);
  };

  removeTodoItem = (todoId) => {
    const targetTodoItemIndex = this._items.findIndex(
			(todo) => todo.id === todoId
    );
    if(targetTodoItemIndex === -1) return;
    this._items.slice(targetTodoItemIndex, 1);
  };

  get items() {
    return this._items;
  }
}

export default TodoList;
