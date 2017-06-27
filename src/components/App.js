import React, { Component } from 'react';
import { AddTodo, Todo, TodoList, Header } from './index'
import './App.css'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header>Simple Todo</Header>
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}
export default App;
