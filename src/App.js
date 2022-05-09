import * as React from "react";
import "antd/dist/antd.css";
import TodoListView from "./components/TodoListView";
import TodoList from "./vo/TodoList";
import TodoItem from "./vo/TodoItem";

const todoItemList = [
  new TodoItem(
    Math.random(),
    '하기 싫은 일',
    new Date(`2022-05-08T10:00:00`),
    true
  ),
  new TodoItem(
    Math.random(),
    '하고 싶은 일',
    new Date(`2022-05-08T11:00:00`),
    true
  ),
  new TodoItem(
    Math.random(),
    '운동하기',
    new Date(`2022-05-08T23:00:00`),
    false
  ),
  new TodoItem(
    Math.random(),
    '점심 먹기',
    new Date(`2022-05-08T23:00:00`),
    true
  ),
  new TodoItem(
    Math.random(),
    '술 먹기',
    new Date(`2022-05-07T11:00:00`),
    true
  ),
  new TodoItem(
    Math.random(),
    '알바 가기',
    new Date(`2022-05-07T13:00:00`),
    true
  ),
  new TodoItem(
    Math.random(),
    '수업 듣기',
    new Date(`2022-05-07T11:00:00`),
    false
  ),
];

const App = () => {
  const todoList = new TodoList(todoItemList, new Date());

  return <TodoListView todoList={todoList} />;
};

export default App;
