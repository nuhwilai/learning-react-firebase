import React, { Component } from 'react';
import { TodoContainer } from '../containers'
import PropTypes from 'prop-types'
import { List } from 'material-ui/List';
const TodoList = ({todos}) => (
    <List>
        {
           todos.map((todo, index) => <TodoContainer key={index} todo={ todo } />)
        }
    </List>
)

export default TodoList;
