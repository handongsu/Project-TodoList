import { mockDataProps } from "../App";
import "./List.css";
import TodoItem from "./TodoItem";
import { ChangeEvent, useState } from "react";

export interface ListProps {
  todos: mockDataProps[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

function List({ todos, onUpdate, onDelete }: ListProps) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List ❤️</h4>
      <input
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
