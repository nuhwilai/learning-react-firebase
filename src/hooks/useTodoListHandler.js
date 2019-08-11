import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadTodoList, unLoadTodoList } from '../actions/todos';

export default function useTodoListHandler() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading);
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(onLoadTodoList());
    return () => {
      dispatch(unLoadTodoList());
    };
  }, []);

  return {
    isLoading,
    todos
  };
}
