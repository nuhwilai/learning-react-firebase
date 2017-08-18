import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoList } from '../components'
import * as todoActions from '../actions/todos'
import CircularProgress from 'material-ui/CircularProgress';
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
        let { isLoading } = this.props.main;
        return (
          isLoading ? 
             <CircularProgress />
            :
            <TodoList todos={todos} />
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        todos: state.todos,
        main: state.main
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    actions: bindActionCreators(todoActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
