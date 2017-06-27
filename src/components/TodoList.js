import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodoList extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {
                    this.props.todos.map((todo, index) => <Todo key={index} content={todo.content} />)
                }
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)
