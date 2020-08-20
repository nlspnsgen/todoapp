import React, { useState } from "react"
import "./TodoItem.scss";
import Priority from "../Priority"

const lowStyle = {
    opacity: "0.7"
}
const highStyle = {
    fontWeight: "500"
}

const TodoItem = (props) => {
    const [priority, setPriority] = useState("")

    const onChangeHandler = (e) => {
        setPriority(e.target.value)
    }
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={props.completed}
                onChange={() => props.handleChange(props._id)}>
            </input>
            {priority === "High" ? <div style={{
                width:"12px", 
                height:"12px", 
                borderRadius: "12px", 
                background:"red",
                display: "inline-block",
                marginRight: "4px"
                }}></div> : null}
                {priority === "Medium" ? <div style={{
                width:"12px", 
                height:"12px", 
                borderRadius: "12px", 
                background:"yellow",
                display: "inline-block",
                marginRight: "4px"
                }}></div> : null}
                {priority === "Low" ? <div style={{
                width:"12px", 
                height:"12px", 
                borderRadius: "12px", 
                background:"purple",
                display: "inline-block",
                marginRight: "4px"
                }}></div> : null}
            <span 
                className={props.completed ? "completedStyle" : null}
                style= { priority === "Low"  ? lowStyle 
                : priority === "High"  ? highStyle : null}
            >
                {props.title}
            </span>
            
            <button onClick={() => props.deleteTodoHandler(props._id)}>Delete</button>
            <Priority onChangeHandler={onChangeHandler} />
        </li>
    )
}

export default TodoItem

