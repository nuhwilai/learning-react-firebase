import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Todo } from '../components'
import * as todoActions from '../actions/todos'
import { bindActionCreators } from 'redux'

class TodoContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            isTodoToggled : this.props.complete
        }
    }

    handleTodoDeleted = () => {
        this.props.actions.deleteTodo(this.props.id)
    }

    handleTodoToggled = () => {
        this.props.actions.toggleTodo(this.props.id)
        this.setState({isTodoToggled: !this.state.isTodoToggled})
    }

    render() {
        return (
            <Todo 
                content={this.props.content}
                onTodoDeleted={ this.handleTodoDeleted }
                onTodoToggled={ this.handleTodoToggled }
                isTodoToggled={ this.state.isTodoToggled }
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