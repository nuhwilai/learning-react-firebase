import React from 'react';
import { Header } from './index';

import { Card, CardTitle, CardText } from 'material-ui/Card';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function App() {
  return (
    <Card>
      <CardTitle style={{ textAlign: 'center' }}>
        <Header>Simple Todo</Header>
        <AddTodo style={{ textAlign: 'center' }} />
      </CardTitle>
      <CardText>
        <TodoList />
      </CardText>
    </Card>
  );
}
