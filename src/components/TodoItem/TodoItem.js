import React from "react"
import "./TodoItem.scss";

const TodoItem = (props) => {
    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={props.completed} 
                onChange={() => props.handleChange(props.id)}>
            </input>
            <span className={ props.completed ? "completedStyle" : null} >{props.title}</span>
            <button onClick={()=>props.deleteTodoHandler(props.id)}>Delete</button>
        </li>
    )
}

export default TodoItem