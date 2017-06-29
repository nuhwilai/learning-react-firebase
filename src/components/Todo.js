import React, { Component } from 'react';

const Todo = ({ content, onTodoDeleted, isTodoToggled, onTodoToggled }) => (
    <li style={{ 
        textDecoration: isTodoToggled? 'line-through': 'none'
    }}>
        <span onClick={ onTodoToggled }>
            { content }
        </span>
        <button type="button" className="close" onClick={ onTodoDeleted } aria-label="Close">
            <span aria-hidden={true}>&times;</span>
        </button>
    </li>
)

export default Todo;
