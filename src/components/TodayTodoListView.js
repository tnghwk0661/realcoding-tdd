import TodoItemView from "./TodoItemView";
import { Input, Radio } from "antd";
import { useMemo, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import TodoItem from "../vo/TodoItem";

const { Search } = Input;

const CustomSearch = (props) => {
  const { onSearch, onChange, ...rest } = props;
  const [value, setValue] = useState("");

  const onSearchHandler = (v, e) => {
    onSearch(v, e);
    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <Search
      value={value}
      onChange={onChangeHandler}
      onSearch={onSearchHandler}
      {...rest}
    />
  );
};

const TodayTodoListView = observer((props) => {
  const { todoList } = props;
  const {
    equalsDayItems,
    equalsDayAndCompletedItems,
    equalsDayAndNotCompletedItems,
  } = todoList;
  const [todoListOption, setTodoListOption] = useState("all");
  const todoItemList = useMemo(() => {
    switch (todoListOption) {
      case "completed":
        return equalsDayAndCompletedItems;
      case "notCompleted":
        return equalsDayAndNotCompletedItems;
      case "all":
      default:
        return equalsDayItems;
    }
  }, [
    equalsDayItems,
    equalsDayAndCompletedItems,
    equalsDayAndNotCompletedItems,
    todoListOption,
  ]);

  const onPushTodoItem = (value, e) => {
    if (!value) {
      return;
    }
    const todoItem = new TodoItem(Math.random(), value, new Date());
    todoList.pushTodoItem(todoItem);
  };

  const onChangeRadioHandler = (e) => {
    setTodoListOption(e.target.value);
  };

  return (
    <>
      <Radio.Group onChange={onChangeRadioHandler} value={todoListOption}>
        <Radio value="all">전체</Radio>
        <Radio value="completed">완료</Radio>
        <Radio value="notCompleted">미완료</Radio>
      </Radio.Group>
      <CustomSearch
        placeholder="할 일을 작성해주세요."
        allowClear
        enterButton="등록"
        size="large"
        onSearch={onPushTodoItem}
      />
      {todoItemList.map((todoItem) => (
        <TodoItemView
          key={todoItem.id}
          todoItem={todoItem}
          onClickDelete={() => todoList.removeTodoItem(todoItem.id)}
        />
      ))}
    </>
  );
});

export default TodayTodoListView;
