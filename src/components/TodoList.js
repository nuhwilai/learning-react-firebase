import React from 'react';
import { List } from 'material-ui/List';
import Todo from './Todo';
import useTodoListHandler from '../hooks/useTodoListHandler';
import { CircularProgress } from 'material-ui';

const TodoList = () => {
  const { todos, isLoading } = useTodoListHandler();

  return isLoading ? (
    <CircularProgress />
  ) : (
    <List>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
