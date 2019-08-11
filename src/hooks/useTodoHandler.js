import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions/todos';

export default function useTodoHanlder(todo) {
  const dispatch = useDispatch();
  const handleTodoDeleted = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleTodoToggled = () => {
    dispatch(toggleTodo(todo));
  };

  return {
    onTodoDeleted: handleTodoDeleted,
    onTodoToggled: handleTodoToggled
  };
}
