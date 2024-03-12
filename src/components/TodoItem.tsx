import React from "react";
import { mockDataProps } from "../App";
import "./TodoItem.css";

interface TodoItemProps extends mockDataProps {
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}: TodoItemProps) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        readOnly
        onChange={onChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

export default TodoItem;
