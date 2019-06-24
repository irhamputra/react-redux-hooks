import React from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <h1>react-redux-hooks</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
