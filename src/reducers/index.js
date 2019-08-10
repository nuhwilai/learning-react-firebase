import { combineReducers } from 'redux';
import todos from './todos';
import main from './main';

export default combineReducers({
  todos,
  main
});
