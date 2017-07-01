import React from 'react';
import PropTypes from 'prop-types'

const AddTodo = ({ onTodoAdd, onChange, content}) => (
    <div className="form-inline">
        <div className="form-group mx-sm-3">
            <input className="form-control" type="text" value={content} 
                onChange={onChange} 
                onKeyPress={(event) => (event.key === 'Enter') && onTodoAdd()}
            />
        </div>
        <button className="btn btn-primary" onClick={onTodoAdd}>
            ADD
        </button>
    </div>
)

AddTodo.propTypes = {
    onTodoAdd: PropTypes.func,
}

export default AddTodo;