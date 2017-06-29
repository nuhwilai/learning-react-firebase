import React, { Component } from 'react';
import { Todo, Header } from './index'
import { AddTodoContainer, TodoListContainer } from '../containers'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
          <div className="card w-30">
              <div className="card-block">
                <Header>Simple Todo</Header>
                <AddTodoContainer/>
                <TodoListContainer/>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
