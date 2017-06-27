import React, { Component } from 'react';

const Todo = ({ content }) => (
    <div style={{ textAlign: 'center'}}>
        { content }
        { " "}
        <button>x</button>
    </div>
)

export default Todo;