import { mockDataProps } from "../App";
import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

// interface TodoItemProps extends mockDataProps {
//   onUpdate: (id: number) => void;
//   onDelete: (id: number) => void;
// }

function TodoItem({ id, isDone, content, date }: mockDataProps) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext) || {};
  const onChangeCheckbox = () => {
    if (onUpdate) {
      onUpdate(id);
    }
  };
  const onClickDeleteButton = () => {
    if (onDelete) {
      onDelete(id);
    }
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

//고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> 리렌더링 x
//   // F -> 리렌더링
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem);
