import React, { Component } from 'react'
import { AddTodo } from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from '../actions/todos'

class AddTodoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: ""
        }
    }

    handleTodoAdd = () => {
        this.props.actions.addTodo(this.state.content);
        this.setState({content: ""})
    }
    
    handleChange = (event) => {
        this.setState({content: event.target.value});
    }

    render(){
        return (
            <AddTodo 
                onTodoAdd={ this.handleTodoAdd }
                onChange={ this.handleChange }
                content={ this.state.content }
            />
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    actions: bindActionCreators(todoActions, dispatch)
})

export default connect(
    null,
    mapDispatchToProps 
)(AddTodoContainer)

