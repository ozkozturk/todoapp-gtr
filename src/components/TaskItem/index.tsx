import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TaskItemProps } from './types';
import { StyledTaskItem, StyledTaskChanges, StyledToggle, StyledEditInput } from './styled';
import Icon from '../Icon';
import {
  deleteTask, updateTask,
} from '../../redux/actions';

const TaskItem: FC<TaskItemProps> = ({ title, id, completed, ...rest }) => {
  const [editable, setEditable] = useState(false);
  const [onEdit, setOnEdit] = useState(title);
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(updateTask({ id, title, completed: !completed }));
  };

  const handleEdit = () => {
    setEditable(!editable);
    dispatch(updateTask({ id, title: onEdit, completed }));
  };

  return (
    <StyledTaskItem {...rest}>
      <div className="task-text">
        <StyledToggle
          htmlFor={`${id}`}
        >
          <input type="checkbox" id={`${id}`} defaultChecked={completed} onClick={handleCompleted} />
          <div>
            <div className="rounded-ball" />
          </div>
        </StyledToggle>
        {
          completed ? <del>{title}</del>
            : editable ?
              (
                <StyledEditInput>
                  <input
                    autoFocus
                    type="text"
                    onKeyUp={e => e.keyCode === 13 && handleEdit()} value={onEdit}
                    onChange={e => setOnEdit(e.target.value)}
                  />
                </StyledEditInput>
              )
              : <p>{onEdit || title}</p>
        }
      </div>
      <StyledTaskChanges>
        <button
          className="edit-button"
          onClick={handleEdit}
        >
          <Icon>edit</Icon>
        </button>
        <button
          onClick={() => dispatch(deleteTask(id))}
        >
          <Icon>trash</Icon>
        </button>
      </StyledTaskChanges>
    </StyledTaskItem>
  );
};

export default TaskItem;
