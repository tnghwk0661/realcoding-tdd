import styled from "styled-components";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
import TodayTodoListView from "./TodayTodoListView";
import LastDayTodoListView from "./LastDayTodoListView";

const Frame = styled.div`
  max-width: 475px;
  margin: auto;
  text-align: center;
  padding: 16px 0;
`;

const Title = styled(Typography.Title)`
  position: relative;
`;

const BackButton = styled.button`
  font-size: 12px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translate(0, -50%);
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
`;

const FrontButton = styled(BackButton)`
  left: unset;
  right: 16px;
`;

const TodoListView = observer((props) => {
  const { todoList } = props;
  const [todoTab, setTodoTab] = useState("today");

  const title = useMemo(() => {
    switch (todoTab) {
      case "lastDay":
        return (
          <Title type="secondary">
            <FrontButton onClick={() => setTodoTab("today")}>
              오늘 할 일 <RightOutlined />
            </FrontButton>
            지난 할 일
          </Title>
        );
      case "today":
      default:
        return (
          <Title type="secondary">
            <BackButton onClick={() => setTodoTab("lastDay")}>
              <LeftOutlined /> 지난 할 일
            </BackButton>
            오늘 할 일
          </Title>
        );
    }
  }, [todoTab]);

  const todoListView = useMemo(() => {
    switch (todoTab) {
      case "lastDay":
        return <LastDayTodoListView todoList={todoList} />;
      case "today":
      default:
        return <TodayTodoListView todoList={todoList} />;
    }
  }, [todoTab]);

  return (
    <Frame>
      {title}
      {todoListView}
    </Frame>
  );
});

export default TodoListView;
