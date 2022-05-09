import styled from "styled-components";
import { Checkbox, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";

const { Paragraph } = Typography;

const Frame = styled.div`
  height: 64px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    align-items: center;
  }
`;

const CustomCheckBox = styled(Checkbox)`
  .ant-checkbox {
    top: 0;
  }
  .ant-checkbox-checked + span {
    text-decoration: line-through;
  }
`;

const Task = styled(Paragraph)`
  max-width: 290px;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  margin-bottom: 0 !important;
  left: 0px !important;
  margin-top: 0px !important;
`;

const ButtonFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .date {
    font-size: 10px;
    color: #949494;
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;
  :hover {
    background: #e4e1e1;
  }
`;

const TodoItem = observer((props) => {
  const { todoItem, disabled, onClickDelete } = props;
  const {
    task,
    createdAtGMTString,
    completed,
    updateTask,
    setComplete,
    unsetComplete,
  } = todoItem;
  const [isEditing, setIsEditing] = useState(false);
  const onChangeEdit = (value) => {
    if (value === "") {
      alert("입력값이 없습니다.");
      return;
    }
    updateTask(value);
    setIsEditing(false);
  };

  const editable = useMemo(
    () => ({
      editing: isEditing,
      icon: <></>,
      onChange: onChangeEdit,
    }),
    [isEditing]
  );

  const onClickEditing = () => {
    setIsEditing(!isEditing);
  };

  const onCheckTaskHandler = (e) => {
    if (e.target.checked) {
      setComplete();
    } else {
      unsetComplete();
    }
  };

  return (
    <Frame>
      <CustomCheckBox
        disabled={disabled}
        checked={completed}
        onChange={onCheckTaskHandler}
      >
        <Task editable={editable}>{task}</Task>
      </CustomCheckBox>
      <ButtonFrame>
        <span className="date">{createdAtGMTString}</span>
        {!disabled && (
          <>
            <Button onClick={onClickEditing}>
              <EditOutlined />
            </Button>
            <Button onClick={onClickDelete}>
              <DeleteOutlined />
            </Button>
          </>
        )}
      </ButtonFrame>
    </Frame>
  );
});

export default TodoItem;
