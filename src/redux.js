import { createStore } from "redux";

const initialState = {
  todos: []
};

const reducers = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducers,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

// ACTION
export const addTodoAction = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const toggleTodoAction = todoID => ({
  type: "TOGGLE_TODO",
  payload: todoID
});

export const deleteTodoAction = todoID => ({
  type: "DELETE_TODO",
  payload: todoID
});
