<<<<<<< HEAD
import { makeObservable, observable, action, computed } from "mobx";
=======
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import { makeObservable, observable } from "mobx";
>>>>>>> fb97e263f7bf22c290127cecfde9a89173714997

class TodoItem {
  /*
    id: number (고유값)
    task: string (할 일)
    createdAt: Date (생성 된 날짜)
    completed: boolean (완료 여부)
  */
  _id = "";
  _task = "";
  _createdAt = "";
  _completed = false;

<<<<<<< HEAD
  constructor(id, task, createdAt, completed = false) {
=======
  constructor(id, task, createdAt, completed=false) {
>>>>>>> fb97e263f7bf22c290127cecfde9a89173714997
    makeObservable(this, {
      _task: observable,
      _completed: observable,
    });
    this._id = id;
    this._task = task;
    this._createdAt = createdAt;
    this._completed = completed;
<<<<<<< HEAD
=======
  }
  equalsDayOfCreatedAt = (_targetDate) => {
    const sourceDate = new Date(this._createdAt).setHours(0, 0, 0, 0);
    const targetDate = new Date(_targetDate).setHours(0, 0, 0, 0);
    return sourceDate === targetDate;
    /*
    sourceDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    return (
      sourceDate.getFullYear() === targetDate.getFullYear() &&
      sourceDate.getDate() === targetDate.getDate() &&
      sourceDate.getDay() === targetDate.getDay()
    );*/
  }
	
	updateTask = (task) => {
		this._task = task;
  }

	setComplete = () => {
    this._completed = true;
  }
  
	unsetComplete = () => {
    this._completed = false;
>>>>>>> fb97e263f7bf22c290127cecfde9a89173714997
  }

  updateTask = (task) => {
    this._task = task;
  };

  setComplete = () => {
    this._completed = true;
  };

  unsetComplete = () => {
    this._completed = false;
  };

  equalsDayOfCreatedAt = (date) => {
    const sourceDate = new Date(this._createdAt).setHours(0, 0, 0, 0);
    const targetDate = new Date(date).setHours(0, 0, 0, 0);
    return sourceDate === targetDate;
  };

  get id() {
    return this._id;
  }

  get task() {
    return this._task;
  }

  get completed() {
    return this._completed;
  }

  get createdAtGMTString() {
    const date = new Date(this._createdAt);
    date.setHours(date.getHours() + 9);
    return date.toISOString().replace("T", " ").substring(0, 19);
  }
}

export default TodoItem;