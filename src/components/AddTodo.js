import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

const AddTodo = ({ onTodoAdd, onChange, content }) => (
  <div>
    <TextField
      hintText="Hint Text"
      type="text"
      onChange={onChange}
      value={content}
      onKeyPress={event => event.key === 'Enter' && onTodoAdd()}
    />
    <RaisedButton
      onClick={onTodoAdd}
      label="ADD"
      primary={true}
      style={{ margin: 12 }}
    />
  </div>
);

AddTodo.propTypes = {
  onTodoAdd: PropTypes.func
};

export default AddTodo;
