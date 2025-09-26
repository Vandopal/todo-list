import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice/todoSlice.js";
import './addtodo.css'


function Addtodo () {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text) {
            dispatch(addTodo(text.slice(0, 33)))
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="newTodo">
            <input className="newTodo__text icon-input" value={text} onChange={handleChange} placeholder="Записать задачу" type="text" />
            <button className="newTodo__submit" type="submit">Подтвердить</button>
        </form>
    )
}

export default Addtodo