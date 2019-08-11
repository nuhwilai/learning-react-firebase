import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as todoActions from '../actions/todos';

export default function useTodoAddHandler() {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const handleTodoAdd = () => {
    dispatch(todoActions.addTodo(content));
    setContent('');
  };

  const handleChange = event => {
    setContent(event.target.value);
  };

  return {
    onTodoAdd: handleTodoAdd,
    onChange: handleChange,
    content
  };
}
