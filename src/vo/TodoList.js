import { makeObservable, observable } from "mobx";

class TodoList {
  /*
    items: TodoItem[] (할 일 리스트)
    date: Date (오늘 날짜)
  */
  _items = [];
  _date = "";

  constructor() {
    makeObservable(this, {
      _items: observable,
    });
  }
}

export default TodoList;
