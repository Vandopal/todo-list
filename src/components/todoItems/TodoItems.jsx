import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from "../../store/todoSlice/todoSlice.js";
import './todoitems.css'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTodo(todo.id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div className='todo-item'>
      <div className='space'>
        <input type="checkbox" className='todo-item__checkbox' checked={todo.completed} onChange={handleChange} />
        <span className='todo-item__text'>
          {todo.text}
        </span>
      </div>
      <button className='todo-item__delete' onClick={handleDelete}>
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;