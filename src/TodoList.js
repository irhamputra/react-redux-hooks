import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "./redux";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = todoID => dispatch(toggleTodoAction(todoID));
  const deleteTodo = todoID => dispatch(deleteTodoAction(todoID));

  const renderTodos = todos.map(({ id, name, complete }) => (
    <li key={id}>
      <input
        type="checkbox"
        checked={complete}
        onChange={toggleTodo.bind(null, id)}
      />
      <span className={complete ? "complete" : null}>{name}</span>
      <span className="delete-btn" onClick={deleteTodo.bind(null, id)}>
        X
      </span>
    </li>
  ));

  return (
    <>
      <h4>Todo List</h4>
      <ul>{renderTodos.length > 0 ? renderTodos : "No todo list yet"}</ul>
    </>
  );
};

export default TodoList;
