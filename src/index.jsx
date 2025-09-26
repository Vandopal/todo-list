import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AddTodo from './components/addTodo/Addtodo.jsx';
import { store } from './store/store.js';
import TodoList from './components/todoList/todoList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='app'>
        <h1>todo list</h1>
        <AddTodo />
        <TodoList/>
      </div>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
