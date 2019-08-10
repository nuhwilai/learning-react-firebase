import services from '../firebase/services';

import {
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  LOAD_SUCCESS
} from '../constants/actionTypes';

class Todo {
  constructor(content) {
    this.content = content;
    this.completed = false;
  }
}

export const addTodo = content => dispatch =>
  services
    .create(new Todo(content))
    .catch(error => dispatch(addTodoError(error)));

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  playload: todo
});

export const addTodoError = error => ({
  type: ADD_TODO_ERROR,
  error
});

export const deleteTodo = id => dispatch =>
  services.delete(id).catch(error => dispatch(deleteTodoError(error)));

export const deleteTodoSuccess = id => ({
  type: DELETE_TODO_SUCCESS,
  id
});

export const deleteTodoError = error => ({
  type: DELETE_TODO_ERROR,
  error
});

export const toggleTodo = todo => dispatch =>
  services
    .update({
      ...todo,
      completed: !todo.completed
    })
    .catch(error => dispatch(updateTodoError(error)));

export const updateTodoSuccess = todo => ({
  type: UPDATE_TODO_SUCCESS,
  playload: todo
});

export const updateTodoError = error => ({
  type: UPDATE_TODO_ERROR,
  error
});

export const loadSuccess = todos => ({
  type: LOAD_SUCCESS,
  todos
});

export const onLoadTodoList = () => {
  return dispatch => {
    services.init(dispatch);
  };
};

export const unLoadTodoList = () => {
  return dispatch => {
    services.unsubscribe();
  };
};
