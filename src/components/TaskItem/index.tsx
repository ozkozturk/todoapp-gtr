import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TaskItemProps } from './types';
import { StyledTaskItem, StyledTaskChanges, StyledToggle } from './styled';
import Icon from '../Icon';
import {
  deleteTask,
} from '../../redux/actions';

const TaskItem: FC<TaskItemProps> = ({ title, id, completed, ...rest }) => {
  const dispatch = useDispatch();

  return (
    <StyledTaskItem {...rest}>
      <div className="task-text">
        <StyledToggle htmlFor={`${id}`}>
          <input type="checkbox" id={`${id}`} />
          <div>
            <div className="rounded-ball" />
          </div>
        </StyledToggle>
        {title}
      </div>
      <StyledTaskChanges>
        <button>
          <Icon>edit</Icon>
        </button>
        <button
          onClick={() => dispatch(deleteTask(id, title))}
        >
          <Icon>trash</Icon>
        </button>
      </StyledTaskChanges>
    </StyledTaskItem>
  );
};

export default TaskItem;
