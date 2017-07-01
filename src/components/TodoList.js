import React, { Component } from 'react';
import { TodoContainer } from '../containers'
import PropTypes from 'prop-types'

const TodoList = ({todos}) => (
    <ul>
        {
           todos.map((todo, index) => <TodoContainer key={index} todo={ todo } />)
        }
    </ul>
)

export default TodoList;
