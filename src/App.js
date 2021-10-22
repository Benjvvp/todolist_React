import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo) return;

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeTodo = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeTodo);
  };

  const completedTodo = (id) => {
    let completed = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(completed);
  };

  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completedTodo={completedTodo}
      />
    </div>
  );
}

export default App;
