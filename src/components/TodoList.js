import React from 'react';
import { List } from 'material-ui/List';

import TodoContainer from '../containers/TodoContainer';
const TodoList = ({ todos }) => (
  <List>
    {todos.map((todo, index) => (
      <TodoContainer key={index} todo={todo} />
    ))}
  </List>
);

export default TodoList;
