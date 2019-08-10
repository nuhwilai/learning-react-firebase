import React from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

const Todo = ({ content, onTodoDeleted, isTodoToggled, onTodoToggled }) => (
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

export default Todo;
