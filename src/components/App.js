import React, { Component } from 'react';
import { Todo, Header } from './index'
import { AddTodoContainer, TodoListContainer } from '../containers'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Card>
          <CardTitle style={{textAlign: 'center'}}>
            <Header>Simple Todo</Header>
            <AddTodoContainer style={{textAlign: 'center'}}/>
          </CardTitle>
          <CardText>
            <TodoListContainer/>
          </CardText>
      </Card>
    );
  }
}
export default App;
