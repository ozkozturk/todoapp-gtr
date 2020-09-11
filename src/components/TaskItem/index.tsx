import React, { FC } from 'react';
import { TaskItemProps } from './types';
import { StyledTaskItem, StyledTaskChanges, StyledToggle } from './styled';
import Icon from '../Icon';

const TaskItem: FC<TaskItemProps> = ({ title, id, ...rest }) => {
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
        <button>
          <Icon>trash</Icon>
        </button>
      </StyledTaskChanges>
    </StyledTaskItem>
  );
};

export default TaskItem;
