import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../todoItems/TodoItems.jsx';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div>
      {todos.length === 0 ? (
        <p>Список задач пуст</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;