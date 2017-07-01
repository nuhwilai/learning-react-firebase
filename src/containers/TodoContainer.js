import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Todo } from '../components'
import * as todoActions from '../actions/todos'
import { bindActionCreators } from 'redux'

class TodoContainer extends Component{
    constructor(props){
        super(props)
    }

    handleTodoDeleted = () => {
        let { id } = this.props.todo;
        this.props.actions.deleteTodo(id)
    }

    handleTodoToggled = () => {
        const { todo } = this.props
        this.props.actions.toggleTodo({
            ...todo,
            completed: !todo.completed 
        })
    }

    render() {
        const { content, completed } = this.props.todo;

        return (
            <Todo 
                content={content}
                isTodoToggled={ completed }
                onTodoDeleted={ this.handleTodoDeleted }
                onTodoToggled={ this.handleTodoToggled }
             />
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    actions: bindActionCreators(todoActions, dispatch)
})

const mapStateToProps = (state, props) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)