import React, { useState, useEffect } from "react";
export default function TodoList({todos, completedTodo, removeTodo}) {
  const [filter, setFilter] = useState(3);
  const [todosFiltered, setTodosFiltered] = useState([]);

  useEffect(() => {
    if (filter === 1) {
      setTodosFiltered(todos.filter((todo) => !todo.completed));
      return;
    }
    if (filter === 2) {
      setTodosFiltered(todos.filter((todo) => todo.completed));
      return;
    }
    if (filter === 3) {
      setTodosFiltered(todos);
      return;
    }
  }, [todos, filter]);

  const changeFilter = (fltr) => {
    setFilter(fltr);
  };

  return (
    <>
      <div className="filterContainer">
        <a className="filterButton" onClick={() => changeFilter(1)}>
          Active
        </a>
        <a className="filterButton" onClick={() => changeFilter(2)}>
          Completed
        </a>
        <a className="filterButton" onClick={() => changeFilter(3)}>
          All
        </a>
      </div>
      <div className="taskContainer">
        {todosFiltered.map((todo) => (
          <div className="task" key={todo.id}>
            <p className={todo.completed ? 'taskCompleted' : ''}>{todo.text}</p>
            <div className="taskTools">
              <i className="fas fa-check-double" onClick={() => completedTodo(todo.id)}></i>
              <i className="fas fa-times-circle" onClick={() => removeTodo(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
