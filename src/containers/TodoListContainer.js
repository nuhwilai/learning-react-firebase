import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../components'
import * as todoActions from '../actions/todos'
import { bindActionCreators } from 'redux'

class TodoListContainer extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.actions.onLoadTodoList()
    }

    componentWillUnmount(){
        this.props.action.unLoadTodoList();
    }

    render(){
        let { todos } = this.props;
        return (
          <TodoList todos={todos} />
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    actions: bindActionCreators(todoActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
