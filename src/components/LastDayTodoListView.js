import TodoItemView from "./TodoItemView";
import { Radio } from "antd";
import { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

const LastDayTodoListView = observer((props) => {
  const { todoList } = props;
  const {
    notEqualsDayItems,
    notEqualsDayAndCompletedItems,
    notEqualsDayAndNotCompletedItems,
  } = todoList;
  const [todoListOption, setTodoListOption] = useState("all");
  const todoItemList = useMemo(() => {
    switch (todoListOption) {
      case "completed":
        return notEqualsDayAndCompletedItems;
      case "notCompleted":
        return notEqualsDayAndNotCompletedItems;
      case "all":
      default:
        return notEqualsDayItems;
    }
  }, [
    notEqualsDayItems,
    notEqualsDayAndCompletedItems,
    notEqualsDayAndNotCompletedItems,
    todoListOption,
  ]);

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
      {todoItemList.map((todoItem) => (
        <TodoItemView key={todoItem.id} disabled todoItem={todoItem} />
      ))}
    </>
  );
});

export default LastDayTodoListView;
