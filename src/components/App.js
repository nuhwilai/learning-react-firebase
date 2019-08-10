import React, { Component } from 'react';
import { Header } from './index';
import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';

import { Card, CardTitle, CardText } from 'material-ui/Card';

class App extends Component {
  render() {
    return (
      <Card>
        <CardTitle style={{ textAlign: 'center' }}>
          <Header>Simple Todo</Header>
          <AddTodoContainer style={{ textAlign: 'center' }} />
        </CardTitle>
        <CardText>
          <TodoListContainer />
        </CardText>
      </Card>
    );
  }
}
export default App;
