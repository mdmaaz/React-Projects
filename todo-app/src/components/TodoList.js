import React from 'react'

export default props => 
    <div className="todo-list">
    <p
    className={props.todo.complete ? "todo-list-complete" : "todo-list-incomplete"}
    onClick = {props.toggleComplete}
    >
        {props.todo.text}
    </p>
    <button className="delete" onClick = {props.onDelete}>X</button>
    </div>
    

// <div className={props.todo.complete ? "todo-list-complete" : "todo-list-incomplete" }
