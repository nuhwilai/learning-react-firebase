import React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import useTodoHanlder from '../hooks/useTodoHandler';

const Todo = ({ todo }) => {
  const { onTodoDeleted, onTodoToggled } = useTodoHanlder(todo);
  const { content, completed: isTodoToggled } = todo;
  return (
    <div
      style={{
        textDecoration: isTodoToggled ? 'line-through' : 'none'
      }}
    >
      <ListItem
        primaryText={content}
        leftCheckbox={
          <Checkbox checked={isTodoToggled} onClick={onTodoToggled} />
        }
        rightIcon={<CloseIcon onClick={onTodoDeleted} />}
      />
    </div>
  );
};

export default Todo;
