import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../components'

class TodoContainer extends Component{

    constructor(props){
        super(props)
    }

    render(){

        console.log(this.props.todos)
        return (
          <TodoList todos={this.props.todos} />
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoContainer)
