import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
};

return (
<div>
<h1>Todo App</h1>
<TodoForm addTodo={addTodo} />
<div>
{todos.map((todo) => (
<Todo
         key={todo.id}
         todo={todo}
         deleteTodo={deleteTodo}
         updateTodo={updateTodo}
       />
))}
</div>
</div>
);
};

export default TodoList;