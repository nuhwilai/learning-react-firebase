import React from 'react';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';

import useTodoAddHandler from '../hooks/useTodoAddHandler';

const AddTodo = () => {
  const { onTodoAdd, onChange, content } = useTodoAddHandler();

  return (
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
};

export default AddTodo;
